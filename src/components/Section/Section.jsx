const Section = ({title, children}) => {
  return (
    <section>{title}
      <h1>
        {children}
      </h1>
    </section>
  )
}
 
export default Section;