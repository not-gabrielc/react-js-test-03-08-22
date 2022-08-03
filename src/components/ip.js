import './css/App.css';

function ReactApi() {
    const [firstArray, setFirstArray] = React.useState([])
    const [secondArray, setSecondArray] = React.useState([])

    handleSubmit = () => {
        console.log(firstArray)
        console.log(secondArray)
    }

    return (
        <div className="App">
            <header>
                <h2>
                    React APi
                </h2>
                <p>seperate the inputs with a comma and a space inbetween</p>
            </header>

            {/* user input  */}
            <form onSubmit={handleSubmit}>
                <h3>input the first array</h3>
                <input value={firstArray} onChange={setFirstArray} />
                <h3>input the second array</h3>
                <input value={secondArray} onChange={setSecondArray} />
            </form>

            {/* results of the inputed arrays */}
            <div>
                <h3>results:</h3>
                <p>{ }</p>
            </div>
        </div>
    );
}

export default ReactApi;