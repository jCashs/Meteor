import './RegStudentTemplate.html'
Template.RegStudent.events({
    'click #register-btn': function(e,t){
    var email = t.find('#login-email').value,
        username = t.find('#username').value,
        password = t.find('#password').value,
        course = t.find('#course').value,
        group = t.find('#group').value,
        role = t.find('#role').value;
        if(role=='administrator'){
          Meteor.call('createNewUser',{username:username,password:password,email:email,profile:{course:'none',group:'teacher',role:role}});
        }
        else{
          console.log('student');
          course = t.find('#course').value,
          group = t.find('#group').value,
          role = t.find('#role').value;
          Meteor.call('createNewUser',{username:username,password:password,email:email,profile:{course:course,group:group,role:role}});
        }

},
})
