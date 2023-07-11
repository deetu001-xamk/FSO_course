
const Course = ( {courses} ) => {

    return (
      <>
        {courses.map(course =>
          
          <div key={course.id}>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
          </div>
        )}
  
  
      
      </>
    )
  
  }
  
  const Header = ({course}) => {
    return (
  
      <>
        <h1>{course.name}</h1>
      </>
    )
  
  }
  
  const Content = ({course}) => {
  
    console.log(course.parts)
  
  
  
    return (
      
      <>
        {course.parts.map(course => 
          
          <Part course={course} key={course.id}/>
        
        )}
      
      
      </>
      
      
    )
  
  
   
  }
  
  const Total = ({course}) => {
  
    const x = course.parts.reduce((x, {exercises}) => x + exercises, 0)
  
  
    return (
  
      <>
      <b>total of {x} exercises</b>
      </>
    )
  
  }
  
  const Part = ({course}) => {
    console.log(course)
    return (
      
      <>
      <p>{course.name} {course.exercises}</p>
      </>
    )
  
  }

export default Course;