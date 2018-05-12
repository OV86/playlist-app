import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';
import AddExpensePage from './AddExpensePage';

// const ExpenseDashboardPage = () => {
//   const url = 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8,GuB-d7jRkCw';

//   return (
//     <div>
//       <ExpenseListFilters />
//       <ExpenseList />
//       <AddExpensePage />
//       <iframe
//         title="party-playlist"
//         width="720"
//         height="405"
//         src={url}
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default ExpenseDashboardPage;

// class ExpenseDashboardPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       url: 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8,GuB-d7jRkCw',
//       text: 'hello'
//     };
//   }

//   // onURLChange = () => {
//   //   const newUrl = 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8';
//   //   this.setState(() => (
//   //     {
//   //       newUrl,
//   //       text: 'byebye'
//   //     }));
//   // };

//   render() {
//     return (
//       <div>
//         <ExpenseListFilters />
//         <ExpenseList />
//         <iframe
//           title="party-playlist"
//           width="720"
//           height="405"
//           src={this.state.url}
//           frameBorder="0"
//           allowFullScreen
//         />
//         {/* <button onClick={this.onURLChange}>Add item</button> */}
//       </div>
//     );
//   }
// }

// export default ExpenseDashboardPage;

const ExpenseDashboardPage = (props) => {
  let url = '';

  if (props.expenses[1]) {
    url = 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8,GuB-d7jRkCw';
  } else {
    url = 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8';
  }


  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
      <AddExpensePage />
      <div>
        <iframe
          title="party-playlist"
          width="720"
          height="405"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);
