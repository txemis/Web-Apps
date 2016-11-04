#Medication Reminder App | React (ES5)
###Author: Marshall Murphy

---

###About:
The application's events are based around a clock, the purpose being to alert a caretaker of upcoming medications that must be administered at specific times.

The app contains a static list of medications with times and dosages, with the idea being that the patient's guardian has previously set these from their side of the app. When the clock is 15 minutes prior to the administration time, the list item is highlighted. When the clock passes the time, the list item is faded.

---

###Installation:
1. Install dependencies at root
  * npm install

2. Run dev server on localhost:8080
  * npm run start

---

###Features:
- Clock determines alert status of list items under the 'Today' tab on the side menu.
- User can select the 'Medications' tab to view a list of the medications and dose quantity for the patient.
- User can add notes about the patient at any point by clicking the pencil in the top right corner of the Navbar. These notes can be viewed in the 'Notes' tab.
- User can phone the patient's emergency contact or call 911 by selecting the appropriate tabs from the side menu.
  * This feature is 'concept only' in this version.
  * Clicking these tabs in the side menu opens a modal, with the 'call' button adding to the Notes tab that the call was made.
  * Some example notes have been included for display purposes.

---

###Future Directions:
Presently I am rewriting this App in ES6+ and Redux to handle the following:
- Handle State with Redux.
- Write in with ES6+ syntax.
- Adding to Notes should trigger the view to re-render --> see branch *Notes&Time React-Redux App*.
- Control for proptypes, and ensure no errors or warnings are triggered in the console.
- Add a button that appears when the medication needs to be administered, forcing the user to confirm that the medication was in fact delivered. Log the time and add to notes tab.
