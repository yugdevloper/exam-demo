// admin.js - Admin Panel Management

// Initialize admin on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAdminLogin();
    loadDashboardData();
});

// ============================================================================
// LOGIN & AUTHENTICATION
// ============================================================================

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Simple authentication (in production, this would be server-side)
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);
        checkAdminLogin();
        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
    } else {
        alert('❌ Invalid username or password!');
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminUsername');
        window.location.href = 'admin.html';
    }
}

function checkAdminLogin() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginPage = document.getElementById('login-page');
    const dashboard = document.getElementById('admin-dashboard');

    if (isLoggedIn === 'true') {
        loginPage.style.display = 'none';
        dashboard.style.display = 'flex';
        openTab('dashboard');
    } else {
        loginPage.style.display = 'flex';
        dashboard.style.display = 'none';
    }
}

// ============================================================================
// TAB NAVIGATION
// ============================================================================

function openTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.admin-nav-menu .nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked nav item
    event.target.classList.add('active');

    // Load specific data based on tab
    if (tabName === 'manage-tests') {
        populateTestsList();
    } else if (tabName === 'manage-categories') {
        populateCategoriesList();
    } else if (tabName === 'daily-updates') {
        populateDailyUpdatesList();
    } else if (tabName === 'analytics') {
        loadAnalytics();
    }
}

// ============================================================================
// DASHBOARD
// ============================================================================

function loadDashboardData() {
    const allTests = getAllTests();
    const attempts = JSON.parse(localStorage.getItem('leaderBoard') || '[]');

    document.getElementById('total-tests').textContent = allTests.length;
    document.getElementById('total-attempts').textContent = attempts.length;

    if (attempts.length > 0) {
        const avgScore = (attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length).toFixed(1);
        document.getElementById('avg-score').textContent = avgScore + '%';
    }
}

// ============================================================================
// ADD TEST FUNCTIONALITY
// ============================================================================

function handleAddTest(event) {
    event.preventDefault();

    const testName = document.getElementById('test-name').value;
    const category = document.getElementById('test-category').value;
    const numQuestions = parseInt(document.getElementById('test-questions').value);
    const duration = parseInt(document.getElementById('test-duration').value);
    const description = document.getElementById('test-description').value;
    const isPublished = document.getElementById('test-published').checked;

    let questionsData;
    try {
        questionsData = JSON.parse(document.getElementById('test-questions-data').value);
    } catch (e) {
        alert('❌ Invalid JSON format for questions!');
        return;
    }

    if (!Array.isArray(questionsData) || questionsData.length === 0) {
        alert('❌ Questions must be a non-empty array!');
        return;
    }

    // Create test object
    const newTest = {
        id: Date.now(),
        testName: testName,
        category: category,
        questions: questionsData,
        numQuestions: numQuestions,
        duration: duration,
        description: description,
        published: isPublished,
        createdAt: new Date().toISOString()
    };

    // Store test
    const allTests = getAllTests();
    allTests.push(newTest);
    localStorage.setItem('allTests', JSON.stringify(allTests));

    // Also sync to Firestore if available
    try {
        if (window.db) {
            window.db.collection('tests').doc(String(newTest.id)).set(newTest)
                .then(() => console.log('Test saved to Firestore:', newTest.testName))
                .catch(err => console.error('Firestore save error:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    // Add to testCategories in script.js format
    if (window.testCategories && window.testCategories[category]) {
        window.testCategories[category].push(testName);
    }

    alert('✅ Test added successfully!');
    document.querySelector('.admin-form').reset();
    document.getElementById('test-questions-data').value = '';
}

function showQuestionSample() {
    document.getElementById('sample-modal').style.display = 'flex';
}

function closeSampleModal() {
    document.getElementById('sample-modal').style.display = 'none';
}

// ============================================================================
// MANAGE TESTS
// ============================================================================

function getAllTests() {
    return JSON.parse(localStorage.getItem('allTests') || '[]');
}

function populateTestsList() {
    const allTests = getAllTests();
    const listContainer = document.getElementById('tests-list');

    if (allTests.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No tests found. Add a new test to get started.</p>';
        return;
    }

    listContainer.innerHTML = allTests.map(test => `
        <div class="test-management-card">
            <div class="test-mgmt-header">
                <h4>${test.testName}</h4>
                <span class="test-category-badge">${getCategoryLabel(test.category)}</span>
            </div>
            <div class="test-mgmt-info">
                <span>📝 ${test.numQuestions} Questions</span>
                <span>⏱️ ${test.duration} mins</span>
                <span>${test.published ? '✅ Published' : '🔒 Draft'}</span>
            </div>
            <p class="test-mgmt-desc">${test.description}</p>
            <div class="test-mgmt-actions">
                <button class="btn-secondary" onclick="editTest(${test.id})">✏️ Edit</button>
                <button class="btn-danger" onclick="deleteTest(${test.id})">🗑️ Delete</button>
                <button class="btn-secondary" onclick="viewTestDetails(${test.id})">👁️ View</button>
            </div>
        </div>
    `).join('');

    // also refresh any open listeners
    try { if (window.populateTestsList) window.populateTestsList(); } catch(e){}
}

function filterTests() {
    const searchTerm = document.getElementById('search-tests').value.toLowerCase();
    const categoryFilter = document.getElementById('filter-category').value;
    const allTests = getAllTests();

    const filtered = allTests.filter(test => {
        const matchesSearch = test.testName.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || test.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const listContainer = document.getElementById('tests-list');
    if (filtered.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No tests match your filters.</p>';
        return;
    }

    listContainer.innerHTML = filtered.map(test => `
        <div class="test-management-card">
            <div class="test-mgmt-header">
                <h4>${test.testName}</h4>
                <span class="test-category-badge">${getCategoryLabel(test.category)}</span>
            </div>
            <div class="test-mgmt-info">
                <span>📝 ${test.numQuestions} Questions</span>
                <span>⏱️ ${test.duration} mins</span>
                <span>${test.published ? '✅ Published' : '🔒 Draft'}</span>
            </div>
            <p class="test-mgmt-desc">${test.description}</p>
            <div class="test-mgmt-actions">
                <button class="btn-secondary" onclick="editTest(${test.id})">✏️ Edit</button>
                <button class="btn-danger" onclick="deleteTest(${test.id})">🗑️ Delete</button>
                <button class="btn-secondary" onclick="viewTestDetails(${test.id})">👁️ View</button>
            </div>
        </div>
    `).join('');
}

function editTest(testId) {
    alert('📝 Edit functionality coming soon!');
}

function deleteTest(testId) {
    if (confirm('Are you sure you want to delete this test?')) {
        let allTests = getAllTests();
        const testToDelete = allTests.find(t => t.id === testId);
        
        allTests = allTests.filter(t => t.id !== testId);
        localStorage.setItem('allTests', JSON.stringify(allTests));

        // Remove from testCategories
        if (window.testCategories && testToDelete && window.testCategories[testToDelete.category]) {
            const idx = window.testCategories[testToDelete.category].indexOf(testToDelete.testName);
            if (idx > -1) {
                window.testCategories[testToDelete.category].splice(idx, 1);
            }
        }

        // Also remove from Firestore
        try {
            if (window.db) {
                window.db.collection('tests').doc(String(testId)).delete()
                    .then(() => console.log('Deleted test from Firestore:', testId))
                    .catch(err => console.error('Firestore delete error:', err));
            }
        } catch (e) {
            console.warn('Firestore not available:', e);
        }

        alert('✅ Test deleted successfully!');
        populateTestsList();
    }
}

function viewTestDetails(testId) {
    const test = getAllTests().find(t => t.id === testId);
    if (!test) return;

    const details = `
Test Name: ${test.testName}
Category: ${getCategoryLabel(test.category)}
Questions: ${test.numQuestions}
Duration: ${test.duration} minutes
Description: ${test.description}
Status: ${test.published ? 'Published' : 'Draft'}
Created: ${new Date(test.createdAt).toLocaleDateString()}

Total Questions Added: ${test.questions.length}
    `;

    alert(details);
}

// ============================================================================
// MANAGE CATEGORIES
// ============================================================================

function handleAddCategory(event) {
    event.preventDefault();

    const categoryName = document.getElementById('category-name').value;
    const categoryIcon = document.getElementById('category-icon').value;
    const categoryDescription = document.getElementById('category-description').value;

    if (!categoryName || !categoryIcon) {
        alert('❌ Please fill in all required fields!');
        return;
    }

    const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
    const newCategory = {
        id: Date.now(),
        name: categoryName,
        icon: categoryIcon,
        description: categoryDescription
    };

    customCategories.push(newCategory);
    localStorage.setItem('customCategories', JSON.stringify(customCategories));

    // Also save category to Firestore
    try {
        if (window.db) {
            window.db.collection('categories').doc(String(newCategory.id)).set(newCategory)
                .then(() => console.log('Category saved to Firestore:', newCategory.name))
                .catch(err => console.error('Firestore category save error:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    alert('✅ Category added successfully!');
    document.querySelector('.admin-form').reset();
    populateCategoriesList();
}

function populateCategoriesList() {
    const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
    const listContainer = document.getElementById('categories-list');

    const defaultCategories = [
        { name: 'Previous Year Papers', icon: '📚', description: 'Previous year exam questions' },
        { name: 'Sectional Tests', icon: '📖', description: 'Topic-wise practice tests' },
        { name: 'Full Length Mock Tests', icon: '📋', description: 'Complete exam simulations' }
    ];

    let html = '';

    // Show default categories
    defaultCategories.forEach(cat => {
        html += `
            <div class="category-management-card">
                <span class="category-icon">${cat.icon}</span>
                <div style="flex: 1;">
                    <h4>${cat.name}</h4>
                    <p>${cat.description}</p>
                </div>
                <span class="category-badge">Default</span>
            </div>
        `;
    });

    // Show custom categories
    if (customCategories.length > 0) {
        customCategories.forEach(cat => {
            html += `
                <div class="category-management-card">
                    <span class="category-icon">${cat.icon}</span>
                    <div style="flex: 1;">
                        <h4>${cat.name}</h4>
                        <p>${cat.description}</p>
                    </div>
                    <button class="btn-danger" onclick="deleteCategory(${cat.id})">🗑️ Delete</button>
                </div>
            `;
        });
    }

    listContainer.innerHTML = html;
}

function deleteCategory(categoryId) {
    if (confirm('Are you sure you want to delete this category?')) {
        let customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        customCategories = customCategories.filter(c => c.id !== categoryId);
        localStorage.setItem('customCategories', JSON.stringify(customCategories));

            // Also remove category from Firestore
            try {
                if (window.db) {
                    window.db.collection('categories').doc(String(categoryId)).delete()
                        .then(() => console.log('Deleted category from Firestore:', categoryId))
                        .catch(err => console.error('Firestore delete category error:', err));
                }
            } catch (e) {
                console.warn('Firestore not available:', e);
            }

        alert('✅ Category deleted successfully!');
        populateCategoriesList();
    }
}

// ============================================================================
// DAILY UPDATES
// ============================================================================

function populateDailyTestSelect() {
    const allTests = getAllTests();
    const select = document.getElementById('daily-test-name');
    
    select.innerHTML = '<option value="">Choose a test</option>' + 
        allTests.map(test => `<option value="${test.testName}">${test.testName}</option>`).join('');
}

function handleAddDailyUpdate(event) {
    event.preventDefault();

    const testName = document.getElementById('daily-test-name').value;
    const uploadTime = document.getElementById('daily-upload-time').value;
    const description = document.getElementById('daily-test-description').value;

    if (!testName || !uploadTime) {
        alert('❌ Please fill in all required fields!');
        return;
    }

    const allTests = getAllTests();
    const test = allTests.find(t => t.testName === testName);

    if (!test) {
        alert('❌ Test not found!');
        return;
    }

    const dailyUpdates = JSON.parse(localStorage.getItem('dailyUpdates') || '[]');
    const newUpdate = {
        testName: testName,
        category: test.category,
        uploadTime: 'Today at ' + uploadTime,
        description: description || ('Question on ' + testName),
        isNew: true,
        addedAt: new Date().toISOString()
    };

    dailyUpdates.push(newUpdate);
    localStorage.setItem('dailyUpdates', JSON.stringify(dailyUpdates));

    // Also add daily update to Firestore (use add to let Firestore assign an ID)
    try {
        if (window.db) {
            window.db.collection('dailyUpdates').add(newUpdate)
                .then(() => console.log('Daily update saved to Firestore:', newUpdate.testName))
                .catch(err => console.error('Firestore daily update error:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    alert('✅ Daily update added successfully!');
    document.querySelector('.admin-form').reset();
    populateDailyUpdatesList();

    // Refresh daily updates on main page
    if (window.populateDailyUpdates) {
        window.populateDailyUpdates();
    }
}

function populateDailyUpdatesList() {
    populateDailyTestSelect();
    const dailyUpdates = JSON.parse(localStorage.getItem('dailyUpdates') || '[]');
    const listContainer = document.getElementById('daily-updates-list');

    if (dailyUpdates.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No daily updates yet. Add tests to today\'s updates.</p>';
        return;
    }

    listContainer.innerHTML = dailyUpdates.map((update, idx) => `
        <div class="daily-update-management-card">
            <div class="daily-mgmt-header">
                <h4>${update.testName}</h4>
                <span class="category-badge">${getCategoryLabel(update.category)}</span>
            </div>
            <p class="daily-mgmt-info">⏰ ${update.uploadTime}</p>
            <p class="daily-mgmt-desc">${update.description}</p>
            <button class="btn-danger" onclick="removeDailyUpdate(${idx})">🗑️ Remove</button>
        </div>
    `).join('');
}

function removeDailyUpdate(index) {
    if (confirm('Remove this from daily updates?')) {
        let dailyUpdates = JSON.parse(localStorage.getItem('dailyUpdates') || '[]');
        const removed = dailyUpdates[index];
        dailyUpdates.splice(index, 1);
        localStorage.setItem('dailyUpdates', JSON.stringify(dailyUpdates));

        alert('✅ Removed from daily updates!');
        populateDailyUpdatesList();

        // Refresh daily updates on main page
        if (window.populateDailyUpdates) {
            window.populateDailyUpdates();
        }
        // Also remove from Firestore if possible (match by testName + addedAt)
        try {
            if (window.db && removed) {
                window.db.collection('dailyUpdates')
                    .where('testName', '==', removed.testName)
                    .where('addedAt', '==', removed.addedAt)
                    .get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            doc.ref.delete().catch(err => console.error('Error deleting daily update doc:', err));
                        });
                    })
                    .catch(err => console.error('Firestore query error:', err));
            }
        } catch (e) {
            console.warn('Firestore not available:', e);
        }
    }
}

// ============================================================================
// ANALYTICS
// ============================================================================

function loadAnalytics() {
    const allTests = getAllTests();
    const attempts = JSON.parse(localStorage.getItem('leaderBoard') || '[]');

    // Test Performance
    let perfHtml = '<ul>';
    allTests.forEach(test => {
        const testAttempts = attempts.filter(a => a.test === test.testName);
        const avgScore = testAttempts.length > 0 
            ? (testAttempts.reduce((sum, a) => sum + a.score, 0) / testAttempts.length).toFixed(1)
            : '0';
        
        perfHtml += `
            <li>
                <strong>${test.testName}</strong>: 
                ${testAttempts.length} attempts, Average Score: ${avgScore}%
            </li>
        `;
    });
    perfHtml += '</ul>';

    if (allTests.length === 0) {
        perfHtml = '<p>No tests available yet.</p>';
    }

    document.getElementById('test-performance-list').innerHTML = perfHtml;

    // User Stats
    let statsHtml = `
        <ul>
            <li>Total Test Attempts: ${attempts.length}</li>
            <li>Unique Users: ${new Set(attempts.map(a => a.name)).size}</li>
            <li>Average Score: ${attempts.length > 0 ? (attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length).toFixed(1) : 0}%</li>
            <li>Highest Score: ${attempts.length > 0 ? Math.max(...attempts.map(a => a.score)).toFixed(1) : 0}%</li>
            <li>Lowest Score: ${attempts.length > 0 ? Math.min(...attempts.map(a => a.score)).toFixed(1) : 0}%</li>
        </ul>
    `;

    document.getElementById('user-stats').innerHTML = statsHtml;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getCategoryLabel(category) {
    const labels = {
        'previous-year': 'Previous Year Papers',
        'sectional': 'Sectional Tests',
        'full-length': 'Full Length Mocks'
    };
    return labels[category] || category;
}

// ============================================================================
// BULK DELETE / CLEAR ACTIONS
// ============================================================================

function deleteAllTests() {
    if (!confirm('This will permanently delete ALL tests (local + Firestore). Continue?')) return;

    // Clear localStorage
    localStorage.removeItem('allTests');
    localStorage.removeItem('testCategories');

    // Remove all documents in Firestore 'tests' collection
    try {
        if (window.db) {
            window.db.collection('tests').get()
                .then(snapshot => {
                    const batchDeletes = [];
                    snapshot.forEach(doc => {
                        batchDeletes.push(doc.ref.delete().catch(e => console.error('Delete doc error', e)));
                    });
                    return Promise.all(batchDeletes);
                })
                .then(() => console.log('All tests removed from Firestore'))
                .catch(err => console.error('Error clearing tests collection:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    alert('✅ All tests cleared locally. Firestore deletions (if any) queued.');
    populateTestsList();
    if (window.populateDailyUpdates) window.populateDailyUpdates();
}

function deleteAllCategories() {
    if (!confirm('This will delete ALL custom categories (local + Firestore). Continue?')) return;

    localStorage.removeItem('customCategories');

    try {
        if (window.db) {
            window.db.collection('categories').get()
                .then(snapshot => {
                    const deletes = [];
                    snapshot.forEach(doc => deletes.push(doc.ref.delete().catch(e => console.error('Delete category error', e))));
                    return Promise.all(deletes);
                })
                .then(() => console.log('All categories removed from Firestore'))
                .catch(err => console.error('Error clearing categories collection:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    alert('✅ Custom categories cleared locally. Firestore deletions (if any) queued.');
    populateCategoriesList();
}

function deleteAllDailyUpdates() {
    if (!confirm('This will delete ALL daily updates (local + Firestore). Continue?')) return;

    localStorage.removeItem('dailyUpdates');

    try {
        if (window.db) {
            window.db.collection('dailyUpdates').get()
                .then(snapshot => {
                    const deletes = [];
                    snapshot.forEach(doc => deletes.push(doc.ref.delete().catch(e => console.error('Delete daily update error', e))));
                    return Promise.all(deletes);
                })
                .then(() => console.log('All dailyUpdates removed from Firestore'))
                .catch(err => console.error('Error clearing dailyUpdates collection:', err));
        }
    } catch (e) {
        console.warn('Firestore not available:', e);
    }

    alert('✅ Daily updates cleared locally. Firestore deletions (if any) queued.');
    populateDailyUpdatesList();
    if (window.populateDailyUpdates) window.populateDailyUpdates();
}

function deleteAllData() {
    if (!confirm('This will clear ALL tests, categories, daily updates, and leaderboards both locally and in Firestore. Continue?')) return;
    deleteAllTests();
    deleteAllCategories();
    deleteAllDailyUpdates();
    localStorage.removeItem('leaderBoard');
    alert('✅ All local data cleared. Firestore deletions (if any) queued.');
}

// ============================================================================
// SYNC / IMPORT FUNCTIONS
// ============================================================================

function pushAllToFirestore() {
    if (!confirm('Push all local data to Firebase (this will overwrite matching docs). Continue?')) return;

    try {
        if (!window.db) throw new Error('Firestore not initialized');

        const promises = [];

        const allTests = JSON.parse(localStorage.getItem('allTests') || '[]');
        allTests.forEach(t => {
            const id = String(t.id || Date.now());
            promises.push(window.db.collection('tests').doc(id).set(t));
        });

        const customCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
        customCategories.forEach(c => {
            const id = String(c.id || Date.now());
            promises.push(window.db.collection('categories').doc(id).set(c));
        });

        const dailyUpdates = JSON.parse(localStorage.getItem('dailyUpdates') || '[]');
        dailyUpdates.forEach(u => {
            promises.push(window.db.collection('dailyUpdates').add(u));
        });

        const leaderBoard = JSON.parse(localStorage.getItem('leaderBoard') || '[]');
        leaderBoard.forEach((l, idx) => {
            promises.push(window.db.collection('leaderBoard').add(l));
        });

        Promise.all(promises)
            .then(() => {
                alert('✅ All local data pushed to Firebase successfully.');
            })
            .catch(err => {
                console.error('Error pushing data:', err);
                alert('⚠️ Some errors occurred while pushing data. Check console.');
            });
    } catch (e) {
        console.error(e);
        alert('Firestore not available. Make sure Firebase is initialized.');
    }
}

function pullAllFromFirestore() {
    if (!confirm('Import all data from Firebase to local (this will overwrite local data). Continue?')) return;

    try {
        if (!window.db) throw new Error('Firestore not initialized');

        const pTests = window.db.collection('tests').get();
        const pCategories = window.db.collection('categories').get();
        const pDaily = window.db.collection('dailyUpdates').get();
        const pLeader = window.db.collection('leaderBoard').get();

        Promise.all([pTests, pCategories, pDaily, pLeader])
            .then(([testsSnap, catsSnap, dailySnap, leaderSnap]) => {
                const tests = testsSnap.docs.map(d => d.data());
                const categories = catsSnap.docs.map(d => d.data());
                const daily = dailySnap.docs.map(d => d.data());
                const leader = leaderSnap.docs.map(d => d.data());

                localStorage.setItem('allTests', JSON.stringify(tests));
                localStorage.setItem('customCategories', JSON.stringify(categories));
                localStorage.setItem('dailyUpdates', JSON.stringify(daily));
                localStorage.setItem('leaderBoard', JSON.stringify(leader));

                // Refresh UI
                populateTestsList();
                populateCategoriesList();
                populateDailyUpdatesList();
                if (window.populateDailyUpdates) window.populateDailyUpdates();

                alert('✅ Imported data from Firebase to local successfully.');
            })
            .catch(err => {
                console.error('Error importing data:', err);
                alert('⚠️ Error importing data. Check console for details.');
            });
    } catch (e) {
        console.error(e);
        alert('Firestore not available. Make sure Firebase is initialized.');
    }
}
