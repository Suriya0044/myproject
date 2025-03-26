import { Container, CardHeader, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Base from '../components/Base';

const Signup = () => {
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prevent default form submission
    // Call the main function which will use formData
    await mainFunc();
  };

  return (
    <Base>
      <Container>
        <Card>
          <CardHeader>
            <h2>Please fill up the information to Signup</h2>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name"> Enter Name </Label>
                <Input id='name' placeholder="Enter Name" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="email"> Enter Email </Label>
                <Input id='email' placeholder="Enter email" type="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password"> Enter Password </Label>
                <Input id='password' placeholder="Enter Password" type="password" />
              </FormGroup>
              <FormGroup>
                <Label for="About"> Enter About You </Label>
                <Input id='about' placeholder="Enter About" type="text" style={{ height: "250px" }} />
              </FormGroup>
              <Container className="text-center">
                <Button color="info" outline type="Submit">Register</Button>
                <Button color="warning" outline type="reset" className="ms-2">Reset</Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
}

// Function to create a TODO using fetch API with formData
const createTodo = async (formData) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      about: formData.about
    }),
  };
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = await p.json();
  return response;
}

// Main function to call createTodo and log the response
const mainFunc = async () => {
  try {
    let formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      about: document.getElementById("about").value
    };
    let todo = await createTodo(formData);
    console.log(todo);
    alert("Signup successful! Please login.");
    window.location.href = "/login";
  } catch (error) {
    alert("Error: " + error.message);
  }
}

export default Signup;
