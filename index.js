var app = angular.module('StudentGrade', []);

app.controller('StudentCtrl', function(Student, Assignment, StudentStats){
	var self = this;

	self.student = new Student("Benjamin")

	self.tempAssignment = new Assignment("hw1", 100)

	self.update = function(assignment){
		self.student.addAssignment(assignment)
		self.average = StudentStats.average(self.student.assignments)
	};









});

app.factory("Student", function(){
	function Student(name){
		var self = this
		self.name = name;
		self.assignments = [];
	}

	Student.prototype.addAssignment = function(assignment){
			var assignmentClone = angular.copy(assignment)
			this.assignments.push(assignmentClone)
	};

	return Student

});

app.factory("Assignment", function(){
	function Assignment(name, score){
		var self = this
		self.name = name;
		self.score = score;

	}
	
	return Assignment	

});

app.service("StudentStats", function(){
	var self = this
	self.average = function(assignments){
		var total = 0
		for ( var i = 0; i < assignments.length; i++){
			total = total + assignments[i].score
		}

		total = total / assignments.length
		return total
	}

	self.grade = function(assignments){
		var avg = self.average(assignments)
		
		
	}

});

app.service("Grade", {
	
	20: ""
})



