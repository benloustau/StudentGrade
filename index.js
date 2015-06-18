var app = angular.module('StudentGrade', []);

app.controller('StudentCtrl', function(Student, Assignment, StudentStats, MAP){
	var self = this;

		self.student = new Student("Benjamin Loustau")

		self.tempAssignment = new Assignment("hw1", 100)

	self.update = function(assignment){
		self.student.addAssignment(assignment)
		self.average = StudentStats.average(self.student.assignments)
		self.grade = StudentStats.grade(self.average)
		self.passing = StudentStats.passing(self.average)
		};

});

app.value("MAP", {
	A: {
		grade : "A",		
		passing : "PASS"
	},
	B: {	
		grade : "B",		
		passing : "PASS"
	},
	C: {
		grade : "C",		
		passing : "PASS"
	},
	D: {
		grade : "D",		
		passing : "PASS"
	},
	F: {
		grade : "F",		
		passing : "FAIL"
	}	
});


app.factory("Student", function(){
	function Student(name){
		var self = this
		self.name = name;
		self.assignments = [];
	};

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

	};
	
	return Assignment	

});


app.service("StudentStats", function(MAP){
	var self = this
	self.average = function(assignments){
		var total = 0
		for ( var i = 0; i < assignments.length; i++){
			total = total + assignments[i].score
		}

		total = total / assignments.length
		return total

	};


	self.grade = function(average){
			if (average >= 90) {
				return MAP.A.grade;
			} else if (average >= 80) {
				return MAP.B.grade;
			} else if (average >= 70) {
				return MAP.C.grade;
			} else if (average >= 60) {
				return MAP.D.grade;
			} else {
				return MAP.F.grade;
			}
	};

	self.passing = function(average) {
			if (average >= 60) {
				return "PASS";
			} else {
				return "FAIL";
			}
	};		

})



