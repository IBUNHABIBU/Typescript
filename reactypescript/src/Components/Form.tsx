
const Form = () => {

    const handleClick = ( e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }


  return (
    <div>
        <form className="post">
            <input type="text" placeholder="search for any thing" />
            <button onClick={handleClick}>Search</button>
        </form>

        <form className="post">
            <h1>Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit molestias repellendus quaerat. Nesciunt illum cupiditate commodi alias a? Eveniet quibusdam nihil totam eligendi quaerat fugit quis molestias officia autem.
            Voluptates dolore eligendi, impedit, molestiae architecto sunt blanditiis veritatis soluta maxime pariatur aspernatur iusto laboriosam hic voluptatem! Error, animi, sint est repudiandae rem ad aut autem at in, veritatis sunt!</p>
        <button>delete</button>
        </form>

        <form className="post">
            <h1>Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae velit molestias repellendus quaerat. Nesciunt illum cupiditate commodi alias a? Eveniet quibusdam nihil totam eligendi quaerat fugit quis molestias officia autem.
            Voluptates dolore eligendi, impedit, molestiae architecto sunt blanditiis veritatis soluta maxime pariatur aspernatur iusto laboriosam hic voluptatem! Error, animi, sint est repudiandae rem ad aut autem at in, veritatis sunt!</p>
        <button>delete</button>
        </form>
    </div>
  )
}

export default Form