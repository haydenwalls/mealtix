import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './Text';
import DisplayView from './DisplayView';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import RenderPDF from 'chrome-headless-render-pdf';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: "4Walls Entertainment",
      date: "July 4, 2019",
      day: "Friday",
      mealtype: "LUNCH",
      primary: "#fd5853",
      secondary: "#ffffff",
      dateColor: "#ffffff",
      mainText: "#ffffff",
      showColor: "#adf0ff",
      showOutline: "#2d0350",
      dateOutline: "#000000",
      mealOutline: "#000000",
      submitted: false,
      showFont: "63",
      showHeight: "23",
      mealFont: "74",
      mealHeight: "28",
      dateFont: "87",
      dateHeight: "25"
    }
  }

  handleShowChange = (e) => {
    this.setState({show: e.target.value})
  }

  handleShowFontChange = (e) => {
    this.setState({showFont: e.target.value})
  }

  handleShowHeightChange = (e) => {
    this.setState({showHeight: e.target.value})
  }

  handleDayChange = (e) => {
    this.setState({day: e.target.value})
  }

  handleDateChange = (e) => {
    this.setState({date: e.target.value})
  }

  handleDateFontChange = (e) => {
    this.setState({dateFont: e.target.value})
  }

  handleDateHeightChange = (e) => {
    this.setState({dateHeight: e.target.value})
  }

  handleMealChange = (e) => {
    this.setState({mealtype: e.target.value})
  }

  handleMealFontChange = (e) => {
    this.setState({mealFont: e.target.value})
  }

  handleMealHeightChange = (e) => {
    this.setState({mealHeight: e.target.value})
  }

  handlePrimaryChange = (e) => {
    this.setState({primary: e.target.value})
  }

  handleSecondaryChange = (e) => {
    this.setState({secondary: e.target.value})
  }

  handleShowColorChange = (e) => {
    this.setState({showColor: e.target.value})
  }

  handleShowOutlineColorChange = (e) => {
    this.setState({showOutline: e.target.value})
  }

  handleDateColorChange = (e) => {
    this.setState({dateColor: e.target.value})
  }

  handleTextColorChange = (e) => {
    this.setState({mainText: e.target.value})
  }

  handleDateOutlineColorChange = (e) => {
    this.setState({dateOutline: e.target.value})
  }

  handleMealOutlineColorChange = (e) => {
    this.setState({mealOutline: e.target.value})
  }

  onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
  }

  handleSave = (e) => {
    e.preventDefault();
    alert("To save this design for printing again later, please click 'File > Print' in Google Chrome and then for 'Destination' click the dropdown and select 'Save as PDF' (instead of selecting your printer). There is no other way to reopen a design after closing this page.\n\nAn additional note on printing: you will need to set margins on this before printing or else the tickets will likely feel too large. In Google Chrome you can click 'More settings' below 'Layout' to set a margin.")
    this.setState({submitted: true});
  }

  // saveDesign = (e) => {
  //   e.preventDefault();
  //   var aFileParts = [JSON.stringify(this.state)];
  //   var oMyBlob = new Blob(aFileParts, {type : 'application/json'}); // the blob
  //   window.open(URL.createObjectURL(oMyBlob));
  // }
  //
  // loadDesign = (e) => {
  //
  // }

  render() {
    let payload;
    if (!this.state.submitted) {
      payload = (
        <div style={{height: '100%', width: '100%'}}>
          <form style={style}>
            <div style={divStyle}>
              <label>
                <span>Background Color: </span>
                <input type="color" value={this.state.primary} onChange={this.handlePrimaryChange} />
              </label>

              <label>
                <span>Foreground Color: </span>
                <input type="color" value={this.state.secondary} onChange={this.handleSecondaryChange} />
              </label>

              <label>
                <span>Title of Show: </span>
                <TextBox currentValue={this.state.show} handleChange={this.handleShowChange} />
              </label>

              <label>
                <span>Upload Show Logo:</span>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
              </label>

              <label>
                  <span>Show Main Color: </span>
                  <input type="color" value={this.state.showColor} onChange={this.handleShowColorChange} />
              </label>

              <label>
                  <span>Show Outline Color: </span>
                  <input type="color" value={this.state.showOutline} onChange={this.handleShowOutlineColorChange} />
              </label>

              <label>
                <span>Show Font Size:</span>
                <input type="range" onChange={this.handleShowFontChange} min="0" max="100" />
              </label>

              <label>
                <span>Show Position:</span>
                <input type="range" onChange={this.handleShowHeightChange} min="0" max="100" />
              </label>

              <label>
                <span>Type of Meal (LUNCH/DINNER/ALL MEALS): </span>
                <TextBox currentValue={this.state.mealtype} handleChange={this.handleMealChange} />
              </label>

              <label>
                <span>Meal Type Font Size:</span>
                <input type="range" onChange={this.handleMealFontChange} min="0" max="100" />
              </label>

            </div>


            <div style={divStyle}>
              <label>
                <span>Day of Week: </span>
                <TextBox currentValue={this.state.day} handleChange={this.handleDayChange} />
              </label>
              <label>
                <span>Date: </span>
                <TextBox currentValue={this.state.date} handleChange={this.handleDateChange} />
              </label>

              <label>
                <span>Date Color: </span>
                <input type="color" value={this.state.dateColor} onChange={this.handleDateColorChange} />
              </label>

              <label>
                <span>Date Outline Color: </span>
                <input type="color" value={this.state.dateOutline} onChange={this.handleDateOutlineColorChange} />
              </label>

              <label>
                <span>Date Font Size:</span>
                <input type="range" onChange={this.handleDateFontChange} min="0" max="100" />
              </label>

              <label>
                <span>Date Position:</span>
                <input type="range" onChange={this.handleDateHeightChange} min="0" max="100" />
              </label>

              <label>
                <span>Main Text Color: </span>
                <input type="color" value={this.state.mainText} onChange={this.handleTextColorChange} />
              </label>

              <label>
                <span>Main Text Outline Color: </span>
                <input type="color" value={this.state.mealOutline} onChange={this.handleMealOutlineColorChange} />
              </label>


              <label>
                <span>Meal Type Position:</span>
                <input type="range" onChange={this.handleMealHeightChange} min="0" max="100" />
              </label>
            </div>

            <button onClick={this.handleSave}>Render For Printing</button>
          </form>
          <DisplayView pic={this.state.selectedFile} values={this.state} />
        </div>
      )
    } else {
      payload = (
          <DisplayView pic={this.state.selectedFile} values={this.state} />
      );
    }
    return (
      payload
    )
  }
}

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '340px'
}

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

export default App;
