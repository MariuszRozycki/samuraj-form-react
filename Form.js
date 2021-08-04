class Form extends React.Component {

  state = {
    city: 'Warszawa',
    text: 'Info o miescie',
    isLoved: true,
    number: '2'
  }

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }
  render() {
    return (
      <div>
        <label>Podaj miasto</label>
        <input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
        <br />
        <br />
        <label>Napisz cos o miescie</label><br />
        <textarea name="text" value={this.state.text} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
        <br />
        <br />
        <label>Czy lubisz to miasto?</label>
        <input name="isLoved" type="checkbox" checked={this.state.isLoved} onChange={this.handleChange} />
        <br />
        <br />
        <label>Ile razy byles w tym miescie?</label>
        <select name="number" value={this.state.number} onChange={this.handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="more">Wiecej</option>
        </select>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));