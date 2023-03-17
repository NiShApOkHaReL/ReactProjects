import Resume from "./components/Resume";

export default function App(){
  let resume = {
    experience: [
      { year: 2012, company: 'xyz', role: 'something' },
      { year: 2015, company: 'abc', role: 'developer' },
      { year: 2018, company: 'pqr', role: 'manager' }
    ],
    education: [
      { year: 2010, degree: 'B.Tech', institution: 'ABC University' },
      { year: 2012, degree: 'M.Tech', institution: 'XYZ University' }
    ],
    skills: ['React JS', 'Node JS', 'JavaScript', 'HTML', 'CSS']
  };
  return(
    <>
   
    <Resume resume={resume}></Resume>
    </>
  )
} 