import { Label } from "flowbite-react"
import { TextInput } from "flowbite-react"
import { Checkbox } from "flowbite-react"
import { Button } from "flowbite-react"

export default function Flowform(){
    return(<>
    <form className="flex flex-col gap-2">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <TextInput
      id="email2"
      type="email"
      placeholder="Enter your Email here"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        placeholder="Enter Password"
        value="Password"
       />
    </div>
    <TextInput
      id="password2"
      type="password"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="repeat-password"
        value="Repeat Password"
        placeholder="ReEnter Password"
      />
    </div>
    <TextInput
      id="repeat-password"
      type="password"
      required={true}
      shadow={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the 
      <a
        href="/forms"
        className="text-Black-600 hover:underline dark:text-Black-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
  <Button type="submit">
    Register new account
  </Button>
</form> 
  </>)
}