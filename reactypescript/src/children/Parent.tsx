
const Parent = ({ children }: {children: React.ReactNode }) => {
  return (
    <div>
        <h6>This is the parent component</h6>

        { children }
    </div>
  )
}

export default Parent;