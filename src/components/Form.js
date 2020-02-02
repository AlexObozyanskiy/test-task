import React, {Component} from 'react';

class Form extends Component {

  state = {
    a: true,
    b: true,
    c: false,
    d: 0,
    e: 0,
    f: 0,
    h: 0,
    k: 0
  };

  blockType = e => {
    e.preventDefault();
  };

  valueOnChange = e => {
    if(e.target.value === ''){
      e.target.value = 0;
      this.setState({
        [e.target.name]: 0
      });
    }
    if(e.target.type === 'checkbox'){
      this.setState({
        [e.target.name]: e.target.checked
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  };

  getCustomTwo = () => {

    const {a,b,c,d,e,f} = this.state;

    const m = f + d + ( d * e / 100);
    const p = d + ( d * (e - f) / 25.5);
    const t = d - ( d * f / 30);

    if( a && b && !c){
      this.setState({
        h: parseInt(t),
        k: parseFloat(t)
      })
    }else if(a && b && c){
      this.setState({
        h: parseInt(p),
        k: parseFloat(p)
      })
    }else if(a && !b && c){
      this.setState({
        h: parseInt(m),
        k: parseFloat(m)
      })
    }else{
      alert('You got an error')
    }

  };

  getCustomOne = () => {

    const {a,b,c,d,e,f} = this.state;

    const m = d + ( d * e / 10);
    const p = 2 * d + ( d * e / 100);
    const t = d - ( d * f / 30);

    if( a && b && !c){
      this.setState({
        h: parseInt(m),
        k: parseFloat(m)
      })
    }else if(a && b && c){
      this.setState({
        h: parseInt(p),
        k: parseFloat(p)
      })
    }else if(!a && b && c){
      this.setState({
        h: parseInt(t),
        k: parseFloat(t)
      })
    }else{
      alert('You got an error')
    }
  };

  getBase = () => {

    const {a,b,c,d,e,f} = this.state;

    const m = d + ( d * e / 10);
    const p = d + ( d * (e - f) / 25.5);
    const t = d - ( d * f / 30);

    if( a && b && !c){
      this.setState({
        h: parseInt(m),
        k: parseFloat(m)
      })
    }else if(a && b && c){
      this.setState({
        h: parseInt(p),
        k: parseFloat(p)
      })
    }else if(!a && b && c){
      this.setState({
        h: parseInt(t),
        k: parseFloat(t)
      })
    }else{
      alert('You got an error')
    }
  };

  render() {

    const {a,b,c,d,e,f,h,k} = this.state;
    const {valueOnChange, blockType, getBase, getCustomOne, getCustomTwo} = this;

    return (
      <div className="form">
        <div>
          <label>A</label>
          <input onChange={valueOnChange}  type='checkbox' checked={a} name='a'/>
        </div>
        <div>
          <label>B</label>
          <input onChange={valueOnChange}  type='checkbox' checked={b} name='b'/>
        </div>
        <div>
          <label>C</label>
          <input onChange={valueOnChange}  type='checkbox' checked={c} name='c'/>
        </div>
        <div>
          <label>D</label>
          <input onChange={valueOnChange}  type='number' onKeyDown={blockType} step='0.1' value={parseFloat(d)} name='d'/>
        </div>
        <div>
          <label>E</label>
          <input onChange={valueOnChange}  type='number' value={parseInt(e)} name='e'/>
        </div>
        <div>
          <label>F</label>
          <input onChange={valueOnChange}  type='number' value={parseInt(f)} name='f'/>
        </div>

        <button onClick={getBase}>Base</button>
        <button onClick={getCustomOne}>Custom 1</button>
        <button onClick={getCustomTwo}>Custom 2</button>

        <p>H: {h}</p>
        <p>K: {k}</p>
      </div>
    );
  }
}

export default Form;
