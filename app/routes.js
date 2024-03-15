//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

  // Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/when-will-funding-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whenWillFunding = req.session.data['when-will-funding']

  // Check whether the variable matches a condition
  if (whenWillFunding == "An event or purchase in the future"){
    // Send user to next page
    res.redirect('/provide-details')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})