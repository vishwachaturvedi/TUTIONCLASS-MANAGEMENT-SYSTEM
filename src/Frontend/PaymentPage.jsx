import React from 'react'

const PaymentPage = () => {
  return (
    <div>
      
 <div>
  <meta charSet="UTF-8" />
  <title />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
  <link rel="stylesheet" href="css/home.css" media="screen" title="no title" charSet="utf-8" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" title="no title" charSet="utf-8" />
  <style media="screen" dangerouslySetInnerHTML={{__html: "\n    .jumbotron {\n      margin: 20px 40px;\n    }\n    .thumbnail{\n      /*margin: 10px 10px;*/\n      padding: 10px 10px;\n      width: 70%;\n      height: auto;\n      align-items: center;\n    }\n    #borderpart{\n       border: 1px solid rgba(0, 0, 0, 0.2);\n       margin: 6px;\n       margin-bottom: 20px;\n       width: 24%;\n       border-radius: 5%;\n    }\n    .containers {\n      width: 92%;\n      margin: auto;\n    }\n    .cntr{\n      align-items: center;\n      width: 50%;\n    }\n    .navbar-custom {\n      color: #FFFFFF;\n      background-color: #001;\n    }\n    a {\n      color: grey;\n    }\n    .active {\n      color:white;\n      font-size: 1.1em;\n    }\n    a:hover {\n      color:#f1f1f1;\n    }\n    .navbar-brand{\n      font-size: 1.5em;\n      color:#f1f1f1;\n    }\n    .custom-toggler.navbar-toggler {\n      padding:1px;\n      background-image: url(\"images/menu.svg\");\n      filter: invert(1);\n    }\n    .zoom {\n      transition: transform .2s;\n    }\n    img {\n      border-radius: 10%;\n    }\n    .zoom:hover {\n        transform: scale(1.05);\n    }\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n    ::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 1px rgb(0, 0, 0);\n    }\n    ::-webkit-scrollbar-thumb {\n      background: rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      background: powderblue;\n    }\nbody {font-family: Arial, Helvetica, sans-serif;}\n\n.product_name {\n    font-size: 20px;\n    font-weight: 400;\n    margin-top: 0px\n}\n.input-group input[type=\"number\"]{\n    height: 30px;\n    width: 50px;\n    \n}\n" }} />
 
  <div className="jumbotron">
    <center><p /><h2>Please select the payment gateway here</h2><p /></center>
    <center><img src="img/pay.png" name="image" height={150} width={350} alt="194x228" className="img-responsive" /></center><br />
    <center><form method="post">
        <table>
          <tbody><tr>
              <th>Payment Mode:</th>
            </tr>
            <tr>
              <td><input type="radio" name="payment" defaultValue="credit" />&nbsp;&nbsp;Cash on devivery &nbsp;&nbsp;
                <input type="radio" name="payment" defaultValue="credit" />&nbsp;&nbsp;Credit card&nbsp;&nbsp;
                <input type="radio" name="payment" defaultValue="debit" />&nbsp;&nbsp;Debit card&nbsp;&nbsp;&nbsp;</td>
            </tr>
            <tr>
              <th>Card Number:</th>
              <th>Card Holder Name:</th>
            </tr>
            <tr>
              <td><input type="tel" className="form-control" placeholder="Valid Card Number" pattern="[0-9]{12}" title="Please Enter valid number" required /></td>
              <td><input type="text" className="form-control" placeholder="Card Owner Name" pattern="[A-Za-z\s]{2,} [A-Za-z]{2,}" title="Please Enter valid name" required /></td>
            </tr>
            <tr>
              <th>Expiration Date:</th>
              <th>CVV No:</th>
            </tr>
            <tr>
              <td><input type="month" className="form-control" placeholder="MM / YY" pattern="[0-1]{1}[0-9]{1}/[2]{1}[0-9]{1}" title="Please Enter valid date" required /></td>
              <td><input type="password" className="form-control" placeholder="cvv number" pattern="[0-9]{3}" title="Please Enter valid cvv number" required /></td>
            </tr>
            <tr>
              <td><input type="submit" className="btn btn-success" name="pay" defaultValue="Pay" /></td>
            </tr>
          </tbody></table>
      </form>
    </center>
  </div>
  
  <div className="row containers" style={{display: 'flex', flexWrap: 'wrap'}}>
  </div>
  <footer className="py-5 bg-light mt-auto">
    <div className="container-fluid">
    </div>
  </footer>
</div>


    </div>
  )
}

export default PaymentPage
