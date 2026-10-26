import { Component } from 'react';

class DaftarTugas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tugas: [],
      isLoading: true
    };
  }

  // Dieksekusi otomatis setelah render pertama (Mounting)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ tugas: data, isLoading: false });
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  render() {
    if (this.state.isLoading) return <p>Memuat data tugas...</p>;

    return (
      <ul>
        {this.state.tugas.slice(0, 5).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

export default DaftarTugas;