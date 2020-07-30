import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component {
  render() {
    if(this.props.businesses) {
      return (
        <div className="BusinessList">
          {
            this.props.businesses.map((business) => {
              return <Business
                key={business.id}
                business={business} />;
            })
          }
        </div>
      );
    } else {
      return (
        <div className="BusinessList">
        </div>
      );
    }
  }
}

export default BusinessList;
