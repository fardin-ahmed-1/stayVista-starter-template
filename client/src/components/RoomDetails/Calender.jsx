import { DateRange } from 'react-date-range';


const Calender = ({value}) => {

  
  return (
    <div>
        <DateRange  
      rangeColors={['#F43F5E']}
      ranges={value}
      direction='vertical'
      showDateDisplay={false}
     />

       
    </div>
  )
}

export default Calender