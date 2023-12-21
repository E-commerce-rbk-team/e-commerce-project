import React, { useState } from 'react'
import '../css/contact.css'
import axios from 'axios';
function Contact({id}) {
    const [name,setName]=useState('')
    const [email, setEmail] = useState('');
    const [numbre,setNumbre] =useState(0)
    const [message, setMessage] = useState("");
const Messsage=(id,obj)=>{
    axios.post(`${id}`,obj).then(ress=>{
        console.log(ress)
    }).catch((err)=>{console.error(err)})}
  return (
    <div class="contact">
      
    <div class="contact-inner">
      <div class="frame-group">
        <div class="placebox-info-parent">
          <div class="placebox-info">
            <div class="place-to-info-box"></div>
            <div class="md">
              <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder='Your Name' />
              
            </div>
          </div>
          <div class="placebox-info">
            <div class="place-to-info-box"></div>
            <div class="md">
             <input type="Email" onChange={(event)=>{setEmail(event.target.value)}} placeholder='Your Email'/>
              
            </div>
          </div>
          <div class="placebox-info">
            <div class="place-to-info-box"></div>
            <div class="md">
             <input type="number" onChange={(event)=>{setNumbre(event.target.value)}} placeholder='Your Numbre'/>
           
            </div>
          </div>
        </div>
        <div class="placebox-info3">
          <div class="place-to-info-box"></div>
          <div class="md">
              <input className='Your-Message' type="text" placeholder='Your message' />
          </div>
        </div>
        <div class="button">
          <div class="view-all-products">
              <button className='bt' onClick={()=>{Messsage(id,{name:name,email:email,numbre:numbre,message:message})}}>Send Your Message</button>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-div">
      <div class="frame-container">
        <div class="logo-group">
          <div class="icons-phone-parent">
            <img
              class="icons-phone"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABQRJREFUeF7tnb1SGzEQx+2SDrtNZ5IWChiSLjADbxHzBEkqeqCnSvIEOG8BM5AuYaCANsFdWpuOMpm9GXnkRR+7ut07yeYq4HSS7qf/fkinO7qdlo93q6s72/3+DnRju9d7/7bXq372Hb+m06vr6fQHnL+eTK5+Pj5etXkL3aYbN8A+DQZHkm1/HY9P2gDaCECA9nFt7SimLimgoNJvDw8nTahTFeDnweBYWmlcyKDML+PxMfc6ankVgDmAwwC0QIoCBFMdbW1dUkevjXLDm5tdSdMWA/h9c/OyKR9XFzz4yA+3t7t164HrawMsQXU+UBJqrAWwJNWF8so6akwGuAjwDNQ6Js0G2HROJ+GnKHWk5o4sgCX7OwpEKMP1i2SAywDPQOZAJANcJJ8XUyPHJ5IALhM8bmCJAlxGeByIQYDL5PdSk+0gwN97e/9i/mIZzr+5uPBy8p7QMN2VjY3Oyvp6xXwyGhXDPhRUnAA1TPfV6WkHANrH38PDztPdXREgfamNE6C06brgGWolQXSZ8jOA0ouhGJ5RnK3GUiC6FmWfAZRUnwsewAJ4cM4cABX+XsKBVTgHUFJ9PngGUqkQsQrnAEqpLwavdIi2CmcApSIvFZ4P4uTsLPsUx47IM4ASeV9/OOz0Dw7Yvg1Dzz2o2HnhDKCE+b4+P2fDMxeUBtGYcQVQwnxxUPizv88OqjbE3COzMeMKoET0tc23jh+zVZwyCOxRS7zAROMKoIT5SgCUUHEij6TLwIxVAKaYX4l5YQVQwv+Z4bPNjxNJS4QH9wx+sCvh/wxA24ypKiwVHtwz+EFRgFApV4Up0JMclsJFFUCJBNruGxcITr5zjrx4DCCh7kpEYFyxrUJKSlMnAVcQFqtKFYBcVWE/yAlArLtVKKwCEPrJnVWUNpUzY6EGMEVVGGIJ/lANIIwQNuWYaZaY0qgCTDFlDBHqCIFv2/TVAaaoigrR97QvpnTJWKIOEDqLgVBSGxdEe3YTelQKbVLakAApnkj7OpViagAR/Ch+IA8gXY9FuY8T6gKsEmnJuXCsQykQsR/FbWBzbRKiylxYCyLVL7qAg2JhL470NpIKoORyVgyea9krFmVxnWDScDzd3weBcIBT+43LVctZ8EeN+XCoU03cnCt4cQcrBlZ0RTrWGD7fJkSpGc4MYJOBxAbpgqiVftjBRaKNuYdKbfhBG2QTkVMa4NxjzTb8IDZpF0SpyJmaPoXc0tyDdSgovTLN9Ym+fK/utExD3c6tHW2bsQEem8JxBkYDHrTv3FyUgxnbEF1TOI7z14IHfXRub4MTbUVjn6rwemKVQBNmFZrwghssc1JhTI0+kJrwsPrgd/VN5hyfFSrrUqNRpJnj2nsTzTnJvdekTeY5qtAG6wOJ4VN3RnAGmPSaA1SYS0T23ZxvndCUr5v6uNplvWiTS15IUYdZnalMNrJCQ6nPVYb9qpeppOlVmtQb1L4u6WXDEkxZGxzUH3v9/+WF68AoUF79jwIsyR9KKpICz5kH+jqRw2KDJKBQXVR4LIC5pzaScGN+z26LZMLmgmWAyIHHUqANscnPeUoqK2a2KZ8NZSnQ7sAi+USOz8ODkAxwUaJzHXhJJoxHoGS/yPV3LhdQS4GlmnRd1SVH4ZhDL0GNEqpTA2gqzu3RAPSriM8gY4XmAFILnLlXMR8YMu+mPxua+jnPmItSDSLUxl/+GQGVFLFc6f8O4z86nDcnBwA3dQAAAABJRU5ErkJggg=="
            />
           

            <div class="view-all-products">Call To Us</div>
          </div>
          <div class="we-are-available-247-7-days-parent">
            <div class="we-are-available">
              We are available 24/7, 7 days a week.
            </div>
            <div class="english">Phone: +8801611112222</div>
          </div>
        </div>
        

        <div class="logo-group">
          <div class="icons-phone-parent">
            <img class="icons-mail" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABGBJREFUeF7tnb1OG0EQx+0yHXabzig1BYikC0g8RswTJKnogZ6K5AlwHgMJp0sQFNQR7tLadCkTjaO11uv9mN2Z2bvz7kmWLN3efvz2Px+3e2f3ew0f73Z2jg6HwyPoxuFg8P7tYLD87jp+LhbT+8XiO5y/n8+nP15epk0OoZ+7cQXs02h0ztn2l9nssgmgWQACtI+7u+chdXEBBZV+fX6+zKFOUYCfR6MLbqXFQgZlXs9mF7HXYcuLAGwDOBOAFEhWgGCqk4ODO+zsNVFu/PBwzGnabAC/7e/f5fJxVPDgIz88Ph5T64HryQC7oDoXKA41kgB2SXW+vJKixmSA2wBPQaWYdDTA3Dkdh5/C1JGaO0YB7LK/w0CEMrF+EQ2wBHgKcgxENMBt8nkhNcb4RBTAkuDFBpYgwBLhxUD0AizJ76Um216Av05O/ob8RQnn39zeOjk5T5RsuqYofEHFCrCa7qZduVIbK8BqunbHZDPlDYBtXAxti5+1LcpuAKzq80+XqcI1gFV9Ya2bKlwDSFXfcDwO96AFJeaTCakXugpXAKmRF+ANT09JHct18fzmpkeBqEfkFUBq3lcSQD0vXAHkMF+XAmHGmzh8/aEoEMaizHgJkGq+UEdIgb/Pznp/np6ycHy1t9d7fXXlbItqwvrC6xIgR/TVAUIHYRDw0Q8ACCAlDwBnaxfaVorkAKii8RIg1XxNBaoO2pQAAwHz4VYjtAWTaMJTyjcnmGrCyoxFASql2VTBoQJVv819mGoXA8jh/1wK1E1VQo0h1entSwCEdKbP4f8wAKFMzIBDfjJ2QiQAgh/MCjDG5HwAU1yCGEBqAm2DgvFvKWqMVZ20CUNC3eeIwFgTtqnKlXaY6Q62nEu5EgqEthoHqHyjmfiqdEdNjis9CfnKVAvB1tsKgL50xxxIajK+1QoMpTvqPOV2sBiAtnSH4+6lKIC634LvHLddRQLEOnJMuQoQQ8lTRgxgU4k0kUf05RIAl4l0znvh6FEzXiABsLF7YUYu6KrEAOZazkKPVKigBMDlchb0l+N+WKKDnCwl+gcbSxUgYZZWADkCicQME8a2cSl3/9Y2lTj8IHcHOeGpFR3OXTn1dILIxjrcu3LvulGB6tusmAXfUHtrG+tQmJpQhzbWQx3KeZ4K0PpoB9WMSwJofbiII50p+vE2AMgRjXOaYhNteR+w5FBhE4PK2ab3Ed+qQv9UoB4yryp0Q0S95gCXUyNyTpPK1VbUizYceWGugeVoJ/pVL9UpjlWaHAOUbiPpZcNqyv+nJfT6f33h2iNfzKv/QYCl+kMMPGCDAlgaRCy8KIAlpTYhv6dbPVqBpQSVGHhRClTU608/rUedKAXql1IXYKVzt5j6Y3yeWW8ywG0JLBR4SSZszkCXg0usv7OpmqTArpo0VXXJUTjkV7qgRg7ViQFUFbdxa6ATP4NsKrQNIKXAqbGy+UCfeefOHVN/zjPkokSDCLbx+mcEWFLIcl3/O4x/TKwNJ9mG6tEAAAAASUVORK5CYII=" />

            <div class="view-all-products">Write To US</div>
          </div>
          <div class="we-are-available-247-7-days-parent">
            <div class="fill-out-our">
              Fill out our form and we will contact you within 24 hours.
            </div>
            <div class="english">Emails: customer@exclusive.com</div>
            <div class="english">Emails: support@exclusive.com</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="underline-parent">
        <img class="underline-icon2" alt="" src="./public/underline@2x.png" />
      </div>
    </div>
  </div>


  )
}

export default Contact