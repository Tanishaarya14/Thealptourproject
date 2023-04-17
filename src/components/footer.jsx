import { Footer } from "flowbite-react"
import {AiFillFacebook} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"
import {GrTwitter} from "react-icons/gr"
import {IoLogoGithub} from "react-icons/io"
import {ImYoutube2} from "react-icons/im"

export default function Flowfooter(){
    return(<>
    <Footer bgDark={true} className="bottom-0 static">
  <div className="w-full text-center">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <Footer.Brand
        The Alp Tour
        href="new.jpg"
        name="The Alp Tour"
      />
      <div>
      <Footer.Title title="help center" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Twitter
          </Footer.Link>
          <Footer.Link href="#">
            Facebook
          </Footer.Link>
          <Footer.Link href="#">
          Contact Us
            <Footer.Link href="https://www.gmail.com">
              Tanishaarya02@gmail.com
            </Footer.Link>
            <Footer.Link href="contact">
              9888725332,9023308914
            </Footer.Link>
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="legal" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Terms & Conditions
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
      <Footer.Title title="download" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            iOS
          </Footer.Link>
          <Footer.Link href="#">
            Android
          </Footer.Link>
          <Footer.Link href="#">
            Windows
          </Footer.Link>
          <Footer.Link href="#">
            MacOS
          </Footer.Link>
        </Footer.LinkGroup>
       </div>
       <div className="mt-4 flex space-x-6 sm:mt-1 sm:justify-center">
        <Footer.Icon
          href="https://www.facebook.com"
          icon={AiFillFacebook}
        />
        <Footer.Icon
          href="https://www.instagram.com/the_alp_rider/"
          icon={FaInstagramSquare}
        />
        <Footer.Icon
          href="https://www.twitter.com"
          icon={GrTwitter}
        />
        <Footer.Icon
          href="https:/www.github.com"
          icon={IoLogoGithub}
        />
        <Footer.Icon
          href="https://youtube.com/@thealprider1452"
          icon={ImYoutube2}
        />
      </div>

    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="logo"
      by="The Alp Tour™"
      year={2023}
    />
  </div>
</Footer>
    </>)
}