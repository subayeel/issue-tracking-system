import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckBox,
  CheckBoxContainer,
  DateField,
  FieldContainer,
  FormContainer,
  FormWrapper,
  Heading,
  Heading2,
  HeadingContainer,
  InputAreaField,
  InputField,
  Label,
  Line,
  RadioBtn,
  SelectField,
  FileInput,
  ConditionalContainer,
  SubmitBtn,
  FormGroup,
  Text2,
  CreateIssueContainer,
  CreateIssueWrapper,
} from "../CreateIssue/CreateIssue.elements";

const CreateProject = (props) => {
  var project = props.project;
  var setProject = props.setProject;
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({}); //error  state
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  //add issue
  const addProject = ()=>{

    var newProject = [...project,formValues]
    setProject(newProject)
  }

  useEffect(() => {
    if (isSubmit && !formErrors) {
      addProject()
      navigate("/");
    }
  }, []);


  const clearInput = () => {
    document.getElementById("pname").value = "";
    document.getElementById("powner").value = "";
    document.getElementById("sdate").value = "";
    document.getElementById("edate").value = "";
  };

  const validate = (values) => {
    var errors = {};
    if (values.projectName.length > 150) {
      alert("Project name Word limit exceeded!");
      errors.projectName = "Summary Word limit exceeded!";
    } else if (
      document.getElementById("sdate").value >
      document.getElementById("edate").value
    ) {
      alert("Start Date greater than end date");
      errors.date = "Start Date greater than end date";
    }
    
  };
  return (
    <>
      <CreateIssueContainer>
        <CreateIssueWrapper>
          <HeadingContainer>
            <Line></Line>
            <Heading>Create Project</Heading>
            <Line></Line>
          </HeadingContainer>

          <FormGroup onSubmit={handleSubmit}>
            <FieldContainer>
              <Label>
                Project Name(Max limit: 150):
                <InputAreaField
                  id="pname"
                  name="projectName"
                  value={formValues.projectName}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Project Owner:
                <SelectField
                  id="powner"
                  value={formValues.assignee}
                  onChange={handleChange}
                  name="projectOwner"
                  required
                >
                  <option selected disabled value="">
                    Select the project assignee
                  </option>
                  <option value="Abdul">Abdul</option>
                  <option value="John">John</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Salman">Salman</option>
                </SelectField>
              </Label>
              
            </FieldContainer>

            <FieldContainer>
              <Label>
                Start Date:
                <DateField
                  id="sdate"
                  name="startDate"
                  value={formValues.startDate}
                  onChange={handleChange}
                  required
                ></DateField>
              </Label>
              <Label>
                End Date:
                <DateField
                  id="edate"
                  name="endDate"
                  value={formValues.endDate}
                  onChange={handleChange}
                  required
                ></DateField>
              </Label>
            </FieldContainer>

            <SubmitBtn>Register</SubmitBtn>
          </FormGroup>
          <SubmitBtn onClick={clearInput}>Reset Form</SubmitBtn>
        </CreateIssueWrapper>
      </CreateIssueContainer>
    </>
  );
};

export default CreateProject;
