import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import nextjs from '../assets/tech_logo/nextjs.png'
import nodejs from '../assets/tech_logo/nodejs.png'
import mysql from '../assets/tech_logo/mysql.png'
import reactjs from '../assets/tech_logo/reactjs.png'
import python from '../assets/tech_logo/python.png'





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'React', logo: reactjs },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
       { name: 'Python', logo: python },
    ],
  },

  {
    title:'Backend',
    skills:[
   {name :'NodeJs' , logo :nodejs} ,
    {name :'NextJs' , logo :nextjs},
    {name :"MySql" , logo : mysql},
    ],

  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
];
