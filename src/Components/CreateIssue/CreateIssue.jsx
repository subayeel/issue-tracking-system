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
} from "./CreateIssue.elements";

const CreateIssue = () => {
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

  useEffect(() => {
    if (formErrors.length === 0) {
      navigate("/");
    }
  }, []);
  const isNumberPrime = (number) => {
    var isPrime = true;
    if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const clearInput = () => {
    document.getElementById("summary").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("storyPoint").value = "";
    document.getElementById("type").value = "";
    document.getElementById("project").value = "";
    document.getElementById("assignee").value = "";
  };

  const validate = (values) => {
    var errors = {};
    if (values.summary.length > 150) {
      alert("Summary Word limit exceeded!");
      errors.summary = "Summary Word limit exceeded!";
    } else if (values.desc.length > 500) {
      alert("Descreption word limit exceeded");
      errors.desc = "Descreption word limit exceeded";
    } else if (values.tags.length > 100) {
      alert("Tags word limit exceeded!");
      errors.tags = "Tags word limit exceeded!";
    } else if (isNumberPrime(parseInt(values.storyPoint))) {
      alert("Story point field requires prime number only!");
      errors.storyPoint = "Story point field requires prime number only!";
    }
  };
  return (
    <>
      <CreateIssueContainer>
        <CreateIssueWrapper>
          <HeadingContainer>
            <Line></Line>
            <Heading>Create Issue</Heading>
            <Line></Line>
          </HeadingContainer>

          <FormGroup onSubmit={handleSubmit}>
            <FieldContainer>
              <Label>
                Summary(Max:150 Letter):
                <InputAreaField
                  id="summary"
                  name="summary"
                  value={formValues.summary}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Descreption (max length: 500)
                <InputAreaField
                  id="desc"
                  name="desc"
                  value={formValues.desc}
                  onChange={handleChange}
                  required
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Tags:
                <InputField
                  id="tags"
                  name="tags"
                  value={formValues.tags}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Story Point:
                <InputField
                  id="storyPoint"
                  name="storyPoint"
                  value={formValues.storyPoint}
                  onChange={handleChange}
                  required
                />
              </Label>
            </FieldContainer>
            <FieldContainer>
              <Label>
                Issue Type:
                <SelectField
                  id="type"
                  value={formValues.issueType}
                  onChange={handleChange}
                  name="issueType"
                  required
                >
                  <option selected disabled value="">
                    Select type
                  </option>
                  <option value="bug">BUG</option>
                  <option value="task">TASK</option>
                  <option value="story">STORY</option>
                </SelectField>
              </Label>

              <Label>
                Project:
                <SelectField
                  id="project"
                  value={formValues.project}
                  onChange={handleChange}
                  name="project"
                  required
                >
                  <option selected disabled value="">
                    Select the project
                  </option>
                  <option value="apiProject">API Project</option>
                  <option value="reactProject">React Project</option>
                  <option value="nodeProject">Node Project</option>
                </SelectField>
              </Label>
              <Label>
                Assignee:
                <SelectField
                  id="assignee"
                  value={formValues.assignee}
                  onChange={handleChange}
                  name="assignee"
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

            <SubmitBtn>Register</SubmitBtn>
          </FormGroup>
          <SubmitBtn onClick={clearInput}>Reset Form</SubmitBtn>
        </CreateIssueWrapper>
      </CreateIssueContainer>
    </>
  );
};

export default CreateIssue;
