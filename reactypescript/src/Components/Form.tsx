
const Form = () => {

    const handleClick = ( e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {

    }

    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>, id: number ) => {
        e.preventDefault();
        console.log(e, "Event")
    }

  return (
    <div>
        <form className="post">
            <input type="text" placeholder="search for any thing" onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </form>

        <form className="post">
            <h1>Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit molestias repellendus quaerat. Nesciunt illum cupiditate commodi alias a? Eveniet quibusdam nihil totam eligendi quaerat fugit quis molestias officia autem.
            Voluptates dolore eligendi, impedit, molestiae architecto sunt blanditiis veritatis soluta maxime pariatur aspernatur iusto laboriosam hic voluptatem! Error, animi, sint est repudiandae rem ad aut autem at in, veritatis sunt!</p>
        <button onClick={ (e)=> handleDelete(e, 1) }>delete</button>
        </form>

        <form className="post">
            <h1>Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit molestias repellendus quaerat. Nesciunt illum cupiditate commodi alias a? Eveniet quibusdam nihil totam eligendi quaerat fugit quis molestias officia autem.
            Voluptates dolore eligendi, impedit, molestiae architecto sunt blanditiis veritatis soluta maxime pariatur aspernatur iusto laboriosam hic voluptatem! Error, animi, sint est repudiandae rem ad aut autem at in, veritatis sunt!</p>
        <button onClick={(e) => handleDelete(e, 2)}>delete</button>
        </form>
    </div>
  )
}

export default Form