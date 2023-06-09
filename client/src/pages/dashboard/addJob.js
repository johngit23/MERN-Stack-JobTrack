import { useState } from "react"
import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
    const { 
        isLoading,
        isEditing,
        showAlert, 
        displayAlert, 
        position,
        company,
        jobLocation,
        jobType, 
        jobTypeOptions,
        status,
        statusOptions,
        handleChange,
        clearValues, 
        createJob, 
        editJob
    } = useAppContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!company || !position || !jobLocation){
            displayAlert()
            return
        }
        if(isEditing){
          editJob()
          return
      }
        createJob()
    }
    
    const handleJobInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }
    return <Wrapper>
     <form className="form">
       <h3>{isEditing ? 'Edit Job' : 'Add Job' }</h3>
       { showAlert && <Alert /> }
       <div className="form-center">
          <FormRow 
             type='text' 
             name='position' 
             value={position} 
             handleChange={handleJobInput} 
           />
           <FormRow 
             type='text' 
             labelText='company'
             name='company' 
             value={company} 
             handleChange={handleJobInput} 
           />
           <FormRow 
             type='jobLocation' 
             name='jobLocation'
             labelText='job location' 
             value={jobLocation} 
             handleChange={handleJobInput} 
           />
            <FormRowSelect 
              name='status'
              value={status}
              handleChange={handleJobInput}
              list={statusOptions}
             /> 
             <FormRowSelect 
              name='jobType'
              value={jobType}
              labelText='type'
              handleChange={handleJobInput}
              list={jobTypeOptions}
             /> 

           <div className='btn-container'>
              <button 
                type='submit' 
                className='btn btn-block submit-btn'
                onClick={handleSubmit}
                disabled={isLoading}
                >
                  submit
              </button>
              <button 
                type='submit' 
                className='btn btn-block clear-btn'
                onClick={(e) => {
                  e.preventDefault()
                  clearValues()
                }}
                >
                  clear
              </button>
           </div>
       </div>
     </form>
    </Wrapper>
}

export default AddJob