module.exports = {
	class Student {
		constructor(fname, lname, studentId, major, year) {
			this.fname = fname;
			this.lname = lname;
			this.studentId = studentId;
			this.major = major;
			this.year = year;
		}

		printStudInfo(){
			console.log("Student name is " + this.fname + this.lname);
			console.log("Unique ID is " + this.studentId);
			console.log("Student majors in " + this.major + "\n");
		}

		greet(){
			console.log("Hi everyone, I've been a student for " + this.year + " years.\n");
		}
	}

	class UnderGraduate extends Student {
		constructor(fname, lname, studentId, major, highSchool, year) {
			super(fname, lname, studentId, major);
			this.highSchool = highSchool;
			this.year = 4;
		}

		greet(){
			console.log("Hey there! My course runs for " + this.year + " years\n");
		}	

		underGradDetails(){
			this.printStudInfo();
			console.log("Attended high school at " + this.highSchool);
			console.log("THIS IS AN UNDERGRADUATE STUDENT!!!\n");
		}
	}	

	class PostGraduate extends Student {
		constructor(fname, lname, studentId, major, undergradDegree, year) {
			super(fname, lname, studentId, major);
			this.undergradDegree = undergradDegree;
			this.year = 2;
		}

		greet(){
			console.log("Yo people, my graduate studies lasts for just " + this.year + " years\n");
		}

		postGradDetails(){
			this.printStudInfo();
			console.log("First degree is " + this.undergradDegree);
			console.log("THIS IS A POSTGRADUATE STUDENT!!!\n");
		}
	}
}