const coding = ["js", "python", "Java", "ruby", "C++"];

coding.forEach(function (val) {
  console.log(val);
});

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
