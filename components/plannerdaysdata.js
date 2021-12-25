var d = new Date();
  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  var tday = weekday[d.getDay()];
  const getnext = (v) => {
    var x = 0;
    if (v >= 7) {
      x = v - 7;
      return weekday[x];
    } else {
      return weekday[v];
    }
  };

export const DATA = [{
      day: tday,
      id2: 1,
      id: 3,
      name: 'Breakfast',
      img: '',
    },

    {
      day: ' ',
      id2: 2,
      id: 1,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id2: 3,
      id: 1,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id2: 4,
      id: 4,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id2: 5,
      id: 2,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id2: 6,
      id: 0,
      name: 'More',
      img: '',
    },

    //DAY2
    {
      day: getnext(d.getDay() + 1),
      id: 3,
      id2: 7,

      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id2: 8,
      id: 1,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id2: 9,
      id: 1,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id2: 10,
      id: 4,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id2: 11,
      id: 2,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 12,
      name: 'More',
      img: '',
    },

    //DAY3
    {
      day: getnext(d.getDay() + 2),
      id: 3,
      id2: 13,

      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 14,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 15,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id: 4,
      id2: 16,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id: 2,
      id2: 17,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 18,
      name: 'More',
      img: '',
    },

    //DAY4
    {
      day: getnext(d.getDay() + 3),
      id: 3,
      id2: 19,

      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 20,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 21,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id: 4,
      id2: 22,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id: 2,
      id2: 23,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 24,
      name: 'More',
      img: '',
    },

    //DAY5
    {
      day: getnext(d.getDay() + 4),
      id: 3,
      id2: 25,
      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 26,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 27,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id: 4,
      id2: 28,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id: 2,
      id2: 29,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 30,
      name: 'More',
      img: '',
    },

    //DAY6
    {
      day: getnext(d.getDay() + 5),
      id: 3,
      id2: 31,

      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 32,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 33,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id: 4,
      id2: 34,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id: 2,
      id2: 36,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 37,
      name: 'More',
      img: '',
    },

    //DAY7
    {
      day: getnext(d.getDay() + 6),
      id: 3,
      id2: 38,
      name: 'Breakfast',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 39,
      name: 'Lunch',
      img: '',
    },

    {
      day: '',
      id: 1,
      id2: 40,
      name: 'Dinner',
      img: '',
    },

    {
      day: '',
      id: 4,
      id2: 41,
      name: 'Deserts',
      img: '',
    },

    {
      day: '',
      id: 2,
      id2: 42,
      name: 'snacks',
      img: '',
    },

    {
      day: '',
      id: 0,
      id2: 43,
      name: 'More',
      img: '',
    },
  ];



   export const DATA2 = [
   //Day1
   {
     day:"DAY 1",
     id2:1,
     id: 3,
     img: ''
   },

   {
     day:" ",
     id2:2,
     id: 1,
     img: ''
   },

   {
     day: "",
     id2:3,
     id: 1,
     img: ''
   },

   {
     day:"",
     id2:4,
     id: 4,
     img: ''
   },

   {
    day:"",
    id: 4,
    id2:5,
    img: ''
  },

  {
    day:"",
    id: 4,
    id2:6,
    img: ''
  },

   //DAY2
   {
     day: "DAY 2",
     id: 3,
     id2:7,
     img: ''
   },

   {
     day:"",
     id2:8,
     id: 1,
     img: ''
   },

   {
     day:"",
     id2:9,
     id: 1,
     img: ''
   },

   {
     day:"",
     id2:10,
     id: 4,
     img: ''
   },


   {
    day:"",
    id: 4,
    id2:11,
    img: ''
  },

  {
    day:"",
    id: 4,
    id2:12,
    img: ''
  },

   //DAY3
   {
     day: "DAY 3",
     id: 3,
     id2:13,
     img: ''
   },

   {
     day:"",
     id: 1,
     id2:14,
     img: ''
   },

   {
     day:"",
     id: 1,
     id2:15,
     img: ''
   },

   {
     day:"",
     id: 4,
     id2:16,
     img: ""
   },


   {
    day:"",
    id: 4,
    id2:17,
    img: ""
  },

  {
    day:"",
    id: 4,
    id2:18,
    img: ""
  },

   //DAY4
   {
     day: "DAY 4",
     id: 3,
     id2:19,   
     img: ""
   },

   {
     day:"",
     id: 1,
     id2:20,
     img: "" 
   },

   {
     day:"",
     id: 2,
     id2:21,
     img: "" 
   },

   {
     day:"",
     id: 4,
     id2:22,
     img: ""
   },

   {
    day:"",
    id: 5,
    id2:23,
    img: ""
  },

  {
    day:"",
    id: 4,
    id2:24,
    img: ""
  },

   //DAY5
   {
     day: "DAY 5",
     id: 3,
     id2:25,
     img: "" 
   },

   {
     day:"",
     id: 1,
     id2:26,
     img: "" 
   },

   {
     day:"",
     id: 7,
     id2:27,
     img: "" 
   },

   {
     day:"",
     id: 9,
     id2:28,
     img: ""
   },

   {
    day:"",
    id: 4,
    id2:29,
    img: ""
  },

  {
    day:"",
    id: 3,
    id2:30,
    img: ""
  },

      
 ]
