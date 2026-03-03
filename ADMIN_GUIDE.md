# UP EXAM MANTRA - Admin Panel Guide

## 🎯 Overview
The Admin Panel provides complete control over all aspects of the test series platform, including creating tests, managing daily updates, and viewing analytics.

## 🔐 Login Credentials
- **URL**: `admin.html`
- **Demo Username**: `admin`
- **Demo Password**: `admin123`

---

## 📊 Admin Panel Features

### 1. **Dashboard** (📊 Dashboard)
- View total tests created
- See total number of categories
- Track total test attempts
- Monitor average scores
- Quick links to common tasks

### 2. **Add New Test** (➕ Add Test)
Complete form to add comprehensive tests with:
- **Test Name**: Name of your test (e.g., "Test 07 Aptitude")
- **Category**: Choose from a**Previous Year Papers**
  - **Sectional Tests**
  - **Full Length Mock Tests**
- **Number of Questions**: 1-200 questions per test
- **Duration**: Test time limit in minutes
- **Description**: Brief test description
- **Questions Data**: Paste questions in JSON format
  - Click "📋 Sample Format" button to see the correct format
  - Each question must have: question text, options (A-E), correct answer index, and explanation

**Example Question Format:**
```json
[
  {
    "question": "कंप्यूटर में ALU का पूरा नाम क्या है?",
    "options": [
      "Arithmetic Logic Unit",
      "Advanced Logic Unit",
      "Application Logic Unit",
      "Automatic Logic Unit",
      "उपर्युक्त में से कोई नहीं"
    ],
    "correct": 0,
    "explanation": "ALU का अर्थ Arithmetic Logic Unit है जो अंकगणितीय और लॉजिकल ऑपरेशन करता है"
  }
]
```

### 3. **Manage Tests** (📝 Manage Tests)
- View all created tests
- Search tests by name
- Filter by category
- Edit test details (coming soon)
- Delete tests
- View test details including creation date and question count

### 4. **Manage Categories** (📁 Manage Categories)
- View default categories:
  - 📚 Previous Year Papers
  - 📖 Sectional Tests
  - 📋 Full Length Mock Tests
- Create custom categories
- Delete custom categories
- Assign icon/emoji to categories

### 5. **Daily Updates** (📅 Daily Updates)
- Add tests to "Today's Updates" section
- Choose which test to feature
- Set upload time
- Add description for the update
- Remove tests from daily updates
- Users see these on the home page with "Attempt Now" button

### 6. **Analytics** (📈 Analytics)
- View test-wise performance
- See number of attempts per test
- Track average scores by test
- Monitor overall user statistics
- View highest/lowest scores

---

## 🔄 Workflow: Adding a Complete Test

### Step 1: Prepare Your Questions
Format your questions in JSON (as shown above). You can:
- Use Excel → Save as JSON
- Copy from any format and restructure
- Use the sample as template

### Step 2: Go to Admin Panel
1. Click "⚙️ Admin" link in navigation
2. Login with credentials
3. Click "➕ Add Test" in sidebar

### Step 3: Fill Test Details
1. Enter test name (e.g., "Test 07 Aptitude")
2. Select category
3. Enter number of questions
4. Set duration (usually 60 minutes)
5. Add description
6. Paste questions in JSON format

### Step 4: Publish Test
- Check "Publish immediately" to make it live
- Click "✅ Add Test"

### Step 5: Add to Daily Updates (Optional)
1. Go to "📅 Daily Updates"
2. Select the test you just added
3. Set upload time
4. Add description
5. Click "📅 Add to Daily Updates"
6. Test appears on home page immediately

### Step 6: Monitor Performance
1. Go to "📈 Analytics"
2. View how many users attempted your test
3. Check average scores
4. Identify tough questions

---

## 📱 User Interface Features

### Home Page
- **Daily Updates Section**: Shows tests uploaded today
- **Exam Categories**: Previous Year, Sectional, Full Length
- **Test List**: Click any test to view details
- **Quick Attempt**: "Attempt Now" buttons throughout

### Mock Test Interface
- **Questions Display**: Clear question and options
- **Progress Tracking**: Know where you are in the test
- **Timer**: Real-time countdown with alerts
- **Answer Review**: After submission, see correct/wrong answers
- **Detailed Explanation**: Learn from every question
- **Score Card**: Get instant results and ranking

---

## 💾 Data Storage
All data is stored in browser's localStorage:
- **allTests**: All created tests with full content
- **dailyUpdates**: Tests featured today
- **customCategories**: User-created categories
- **leaderBoard**: User attempts and scores
- **adminLoggedIn**: Session management

---

## ✅ Best Practices

### For Test Creation
✓ Always verify JSON format before submission
✓ Use clear, concise question text
✓ Provide detailed explanations
✓ Test your questions on user interface
✓ Keep questions at appropriate difficulty level

### For Daily Updates
✓ Update daily with fresh tests
✓ Rotate between categories
✓ Use engaging descriptions
✓ Set realistic time slots for uploads

### For Analytics
✓ Review performance weekly
✓ Identify low-scoring topics
✓ Adjust test difficulty based on data
✓ Track user engagement trends

---

## 🛠️ Troubleshooting

### Questions Not Showing?
- Check JSON format is valid
- Ensure "correct" index matches an option (0-4)
- Verify all required fields present

### Tests Not Appearing in User View?
- Ensure test is marked "Publish immediately"
- Check category selection
- Verify test is in localStorage

### Daily Updates Not Visible?
- Confirm test is published first
- Check if daily update has upload time set
- Refresh the page (Ctrl+F5)

### Lost All Data?
- Clear browser cache carefully (only clear if sure)
- Admin data syncs from localStorage - exports backup often
- Use browser history to recover if deleted accidentally

---

## 🚀 Advanced Features (Future Updates)
- Bulk test import from CSV/Excel
- Test scheduling for future dates
- Custom time slots for different tests
- Student performance tracking
- Advanced analytics dashboard
- Email notifications for new tests
- Test sharing between platforms

---

## 📞 Support
For issues or feature requests:
1. Check this guide first
2. Review sample question format
3. Verify JSON validity
4. Check browser console for errors (F12 → Console)
5. Clear cache and retry

**Remember**: Always test new tests on the user side before promoting to daily updates!
