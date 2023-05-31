import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useState, useMemo } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
    const {
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        statusOptions,
        jobTypeOptions,
        handleChange,
        clearFilters
    } = useAppContext()
    const handleSearch = (e) => {
        handleChange({ name: e.target.name, value: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        clearFilters()
    }
    const debounce = () => {
      let timeoutId
      return (e) => {
        setLocalSearch(e.target.value)
        clearTimeout(timeoutId)
        timeoutId = setTimeout(()=>{
          handleChange({ name: e.target.name, value: e.target.value })
        }, 1000)
      }
    }
    const optimizeDebounce = useMemo(()=>debounce(), [])
    return ( 
        <Wrapper>
            <form className='form'>
                <h4>Search Form</h4>
                <div className='form-center'>
                    <FormRow
                      type='text'
                      name='search'
                      value={localSearch}
                      handleChange={optimizeDebounce}
                    ></FormRow>
                    <FormRowSelect
                      labelText='job status'
                      name='searchStatus'
                      value={searchStatus}
                      handleChange={handleSearch}
                      list={[ 'all', ...statusOptions ]}
                    ></FormRowSelect>
                    <FormRowSelect
                      labelText='job type'
                      name='searchType'
                      value={searchType}
                      handleChange={handleSearch}
                      list={[ 'all', ...jobTypeOptions ]}
                    ></FormRowSelect>
                    <FormRowSelect
                      name='sort'
                      value={sort}
                      handleChange={handleSearch}
                      list={sortOptions}
                    ></FormRowSelect>
                    <button 
                      className='btn btn-block btn-danger' 
                      disabled={isLoading} 
                      onClick={handleSubmit}
                    >
                        clear filters 
                    </button>
                </div>
            </form>
        </Wrapper>        
     );
}
 
export default SearchContainer;