
import React from 'react';
import AddComparison from './AddComparison';
import AddComparisonAction from '../containers/AddComparison';

export default class ComparisonList extends React.Component {
  render() {
    const existingComparisons = this.props.comparisons.map(comparison => {
      return <AddComparison userName={comparison.name} userId={comparison.user} disabled={true} addHidden={true}
        key={comparison.user} />;
    });
    return (
      <div>
        {existingComparisons}
        <AddComparisonAction />
      </div>
    );
  }
};
