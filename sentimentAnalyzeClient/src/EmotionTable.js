import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          {JSON.stringify(this.props.emotions)}
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              this.props.emotions && Object.entries(this.props.emotions).map(function(mapentry){
                return (
                  <tr key={mapentry}>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;