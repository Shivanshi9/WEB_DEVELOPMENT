let fData = [
  {
    "name": "Aarav Sharma",
    "date": "1999-04-12",
    "phone": "9876543210",
    "city": "Bhopal",
    "profession": "Software Engineer"
  },
  {
    "name": "Neha Verma",
    "date": "2000-08-25",
    "phone": "9123456780",
    "city": "Indore",
    "profession": "Graphic Designer"
  },
  {
    "name": "Rohit Patel",
    "date": "1998-11-05",
    "phone": "9988776655",
    "city": "Ahmedabad",
    "profession": "Business Analyst"
  },
  {
    "name": "Priya Singh",
    "date": "2001-02-18",
    "phone": "9012345678",
    "city": "Delhi",
    "profession": "Doctor"
  },
  {
    "name": "Karan Mehta",
    "date": "1997-07-30",
    "phone": "9090909090",
    "city": "Mumbai",
    "profession": "Marketing Manager"
  }
]


fData.forEach((elem) =>{
    console.log(elem["date"]);
    
})

console.log(fData[1]["name"]);
