import React from 'react';

class DisplayView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const innerStyle = {
      backgroundColor: `white`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      backgroundImage: `url(${this.props.pic && window.URL.createObjectURL(this.props.pic)})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '90%',
      backgroundPosition: `center ${.35 * this.props.values.showHeight}px`,
      position: 'relative'
    }

    const dayStyle = {
      fontSize: `${.186 * 2 * this.props.values.dateFont}px`,
      fontWeight: '400',
      fontFamily: 'Chunkfive',
      textAlign: 'center',
      color: `${this.props.values.dateColor}`,
      textShadow: `1.25px 0px .5px ${this.props.values.dateOutline}, 0px 1.25px .5px ${this.props.values.dateOutline}, -.5px 0px .8px ${this.props.values.dateOutline}, 0px -.5px .8px ${this.props.values.dateOutline}`
    }

    const dateStyle = {
      fontSize: `${.16 * 2 * this.props.values.dateFont}px`,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Chunkfive',
      textShadow: `1.5px 0px .5px ${this.props.values.dateOutline}, 0px 1.5px .5px ${this.props.values.dateOutline}, -.7px 0px .8px ${this.props.values.dateOutline}, 0px -.7px .8px ${this.props.values.dateOutline}`,
      paddingBottom: `${.5 * this.props.values.dateHeight}px`,
      color: `${this.props.values.dateColor}`,
    }

    const eventStyle = {
      fontSize: `${.5 * this.props.values.showFont}px`,
      fontWeight: '900',
      fontFamily: 'Chunkfive',
      color: `${this.props.values.showColor}`,
      textAlign: 'center',
      textShadow: `0px 1.25px .75px ${this.props.values.showOutline}, 0px -1.25px .75px ${this.props.values.showOutline}, 1.25px 0px .75px ${this.props.values.showOutline}, -1.25px 0px .75px ${this.props.values.showOutline}, -0px 3.25px .5px white, 0px 3.75px .56px black`,
      margin: `${18.5 * this.props.values.showHeight/30}px 3% 0 3%`,
      lineHeight: '1.1em',
    }

    const verticalStyleR = {
      // width: '36px',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      textShadow: '-1px -0px 1px white, 1px 0px 1px white, 0px 1px 1px white, 0px -1px 1px white',
      lineHeight: '.96em',
      marginRight: `${.3 * this.props.values.mealHeight}px`,
      marginLeft: '16px',
      fontSize: `${.44 * this.props.values.mealFont}px`,
      fontWeight: 'bold',
      textAlign: 'center',
      letterSpacing: '.04em',
    }

    const groupStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: `${this.props.values.primary}`,
      width: '50%',
      height: '100%',
    }

    const ticketStyle1 = {
      width: '96%',
      height: '18.6%',
      border: `2px solid ${this.props.values.secondary}`,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }

    const ticketStyle2 = {
      width: '96%',
      height: '18.6%',
      border: `2px solid ${this.props.values.secondary}`,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }

    const innerBorder = {
      border: `.1px solid ${this.props.values.secondary}`,
      padding: '3px 3.8px 3px 3.8px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '60%',
      height: '84%',
      marginLeft: '-6px'
    }

    let mealOutline = this.props.values.mealOutline;
    const verticalStyleL = {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      transform: 'rotate(-180deg)',
      textShadow: `-1px 0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
      lineHeight: '.96em',
      // paddingRight: '.14em',
      fontSize: '2em',
      fontWeight: 'bold',
      textAlign: 'center',
      letterSpacing: '.04em',
      display: 'flex',
      flexDirection: 'column',
      // marginLeft: '9px',
      // marginRight: '2px'
    }

    return (
      <div id='display' style={displayStyle}>
        <div className='group' style={groupStyle}>
          <div className='ticket' style={ticketStyle1}>
              <div className='mealticket' style={verticalStyleL}>
                <div>
                  <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                  <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                  <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                </div>
                <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
              </div>
              <div className='innerBorder' style={innerBorder}>
                <div className='innerTicket' style={innerStyle}>
                  {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                  <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                    <span style={dayStyle}>{this.props.values.day}</span>
                    <span style={dateStyle}>{this.props.values.date}</span>
                  </div>
                </div>
              </div>
              <div style={verticalStyleR}>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginBottom: '.11rem',
                }}>★</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                  transform: 'scale(1.1, 1.1)',
                  color: `${this.props.values.mainText}`
                }}>{this.props.values.mealtype}</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginTop: '.04rem',
                }}>★</span>
              </div>
          </div>
          <div className='ticket' style={ticketStyle1}>
              <div className='mealticket' style={verticalStyleL}>
                <div>
                  <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                  <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                  <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                </div>
                <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
              </div>
              <div className='innerBorder' style={innerBorder}>
                <div className='innerTicket' style={innerStyle}>
                  {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                  <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                    <span style={dayStyle}>{this.props.values.day}</span>
                    <span style={dateStyle}>{this.props.values.date}</span>
                  </div>
                </div>
              </div>
              <div style={verticalStyleR}>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginBottom: '.11rem',
                }}>★</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                  transform: 'scale(1.1, 1.1)',
                  color: `${this.props.values.mainText}`
                }}>{this.props.values.mealtype}</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginTop: '.04rem',
                }}>★</span>
              </div>
          </div>
          <div className='ticket' style={ticketStyle1}>
              <div className='mealticket' style={verticalStyleL}>
                <div>
                  <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                  <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                  <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                </div>
                <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
              </div>
              <div className='innerBorder' style={innerBorder}>
                <div className='innerTicket' style={innerStyle}>
                  {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                  <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                    <span style={dayStyle}>{this.props.values.day}</span>
                    <span style={dateStyle}>{this.props.values.date}</span>
                  </div>
                </div>
              </div>
              <div style={verticalStyleR}>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginBottom: '.11rem',
                }}>★</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                  transform: 'scale(1.1, 1.1)',
                  color: `${this.props.values.mainText}`
                }}>{this.props.values.mealtype}</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginTop: '.04rem',
                }}>★</span>
              </div>
          </div>
          <div className='ticket' style={ticketStyle1}>
              <div className='mealticket' style={verticalStyleL}>
                <div>
                  <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                  <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                  <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                </div>
                <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
              </div>
              <div className='innerBorder' style={innerBorder}>
                <div className='innerTicket' style={innerStyle}>
                  {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                  <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                    <span style={dayStyle}>{this.props.values.day}</span>
                    <span style={dateStyle}>{this.props.values.date}</span>
                  </div>
                </div>
              </div>
              <div style={verticalStyleR}>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginBottom: '.11rem',
                }}>★</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                  transform: 'scale(1.1, 1.1)',
                  color: `${this.props.values.mainText}`
                }}>{this.props.values.mealtype}</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginTop: '.04rem',
                }}>★</span>
              </div>
          </div>
          <div className='ticket' style={ticketStyle1}>
              <div className='mealticket' style={verticalStyleL}>
                <div>
                  <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                  <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                  <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                </div>
                <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
              </div>
              <div className='innerBorder' style={innerBorder}>
                <div className='innerTicket' style={innerStyle}>
                  {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                  <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                    <span style={dayStyle}>{this.props.values.day}</span>
                    <span style={dateStyle}>{this.props.values.date}</span>
                  </div>
                </div>
              </div>
              <div style={verticalStyleR}>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginBottom: '.11rem',
                }}>★</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                  transform: 'scale(1.1, 1.1)',
                  color: `${this.props.values.mainText}`
                }}>{this.props.values.mealtype}</span>
                <span style={{
                  fontFamily: 'Chunkfive',
                  fontSize: '22.4px',
                  textShadow: '0px 1px .5px black',
                  color: `${this.props.values.secondary}`,
                  marginTop: '.04rem',
                }}>★</span>
              </div>
          </div>
        </div>
        <div className='group' style={groupStyle}>
        <div className='ticket' style={ticketStyle1}>
            <div className='mealticket' style={verticalStyleL}>
              <div>
                <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
              </div>
              <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
            </div>
            <div className='innerBorder' style={innerBorder}>
              <div className='innerTicket' style={innerStyle}>
                {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                  <span style={dayStyle}>{this.props.values.day}</span>
                  <span style={dateStyle}>{this.props.values.date}</span>
                </div>
              </div>
            </div>
            <div style={verticalStyleR}>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginBottom: '.11rem',
              }}>★</span>
              <span style={{
                fontFamily: 'Chunkfive',
                textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                transform: 'scale(1.1, 1.1)',
                color: `${this.props.values.mainText}`
              }}>{this.props.values.mealtype}</span>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginTop: '.04rem',
              }}>★</span>
            </div>
        </div>
        <div className='ticket' style={ticketStyle1}>
            <div className='mealticket' style={verticalStyleL}>
              <div>
                <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
              </div>
              <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
            </div>
            <div className='innerBorder' style={innerBorder}>
              <div className='innerTicket' style={innerStyle}>
                {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                  <span style={dayStyle}>{this.props.values.day}</span>
                  <span style={dateStyle}>{this.props.values.date}</span>
                </div>
              </div>
            </div>
            <div style={verticalStyleR}>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginBottom: '.11rem',
              }}>★</span>
              <span style={{
                fontFamily: 'Chunkfive',
                textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                transform: 'scale(1.1, 1.1)',
                color: `${this.props.values.mainText}`
              }}>{this.props.values.mealtype}</span>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginTop: '.04rem',
              }}>★</span>
            </div>
        </div>
        <div className='ticket' style={ticketStyle1}>
            <div className='mealticket' style={verticalStyleL}>
              <div>
                <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
              </div>
              <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
            </div>
            <div className='innerBorder' style={innerBorder}>
              <div className='innerTicket' style={innerStyle}>
                {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                  <span style={dayStyle}>{this.props.values.day}</span>
                  <span style={dateStyle}>{this.props.values.date}</span>
                </div>
              </div>
            </div>
            <div style={verticalStyleR}>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginBottom: '.11rem',
              }}>★</span>
              <span style={{
                fontFamily: 'Chunkfive',
                textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                transform: 'scale(1.1, 1.1)',
                color: `${this.props.values.mainText}`
              }}>{this.props.values.mealtype}</span>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginTop: '.04rem',
              }}>★</span>
            </div>
        </div>
        <div className='ticket' style={ticketStyle1}>
            <div className='mealticket' style={verticalStyleL}>
              <div>
                <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
              </div>
              <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
            </div>
            <div className='innerBorder' style={innerBorder}>
              <div className='innerTicket' style={innerStyle}>
                {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                  <span style={dayStyle}>{this.props.values.day}</span>
                  <span style={dateStyle}>{this.props.values.date}</span>
                </div>
              </div>
            </div>
            <div style={verticalStyleR}>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginBottom: '.11rem',
              }}>★</span>
              <span style={{
                fontFamily: 'Chunkfive',
                textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                transform: 'scale(1.1, 1.1)',
                color: `${this.props.values.mainText}`
              }}>{this.props.values.mealtype}</span>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginTop: '.04rem',
              }}>★</span>
            </div>
        </div>
        <div className='ticket' style={ticketStyle1}>
            <div className='mealticket' style={verticalStyleL}>
              <div>
                <span style={{fontSize: '.7em', marginBottom: '.3rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
                <span style={{color: `${this.props.values.mainText}`}}>MEAL</span>
                <span style={{fontSize: '.7em', marginTop: '.16rem', color: `${this.props.values.secondary}`, textShadow: '0px -1px .5px black'}}>★</span>
              </div>
              <span style={{color: `${this.props.values.mainText}`}}>TICKET</span>
            </div>
            <div className='innerBorder' style={innerBorder}>
              <div className='innerTicket' style={innerStyle}>
                {!this.props.pic && <span style={eventStyle}>{this.props.values.show}</span>}
                <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', letterSpacing: '.065em'}}>
                  <span style={dayStyle}>{this.props.values.day}</span>
                  <span style={dateStyle}>{this.props.values.date}</span>
                </div>
              </div>
            </div>
            <div style={verticalStyleR}>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginBottom: '.11rem',
              }}>★</span>
              <span style={{
                fontFamily: 'Chunkfive',
                textShadow: `-1px -0px 1px ${mealOutline}, 1px 0px 1px ${mealOutline}, 0px 1px 1px ${mealOutline}, 0px -1px 1px ${mealOutline}`,
                transform: 'scale(1.1, 1.1)',
                color: `${this.props.values.mainText}`
              }}>{this.props.values.mealtype}</span>
              <span style={{
                fontFamily: 'Chunkfive',
                fontSize: '22.4px',
                textShadow: '0px 1px .5px black',
                color: `${this.props.values.secondary}`,
                marginTop: '.04rem',
              }}>★</span>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

const displayStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  // backgroundColor: 'blue',
  width: '8.5in',
  height: '11in',
}

export default DisplayView;
