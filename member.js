function SkillsMembrer() {
    var skills = ['JavaScript', 'React', 'Node', 'MongoDB'];
    var name = 'John Doe';
    var age = 30;
    var job = 'Web Developer';
    this.getSkills = function() {
        return skills;
    };
    this.getName = function() {
        return name;
    };
    this.getAge = function() {
        return age;
    };
    this.getJob = function() {
        return job;
    };
}