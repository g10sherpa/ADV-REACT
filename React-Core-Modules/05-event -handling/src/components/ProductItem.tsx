import React from "react";

interface IProduct {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface IProps {}

interface IState {
  product: IProduct;
}

class ProductItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      product: {
        sno: "AABC12",
        name: "Arsenal Kit",
        image:
          "data:image/jpeg;base64,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",
        price: 2500,
        qty: 5,
      },
    };
  }

  incrQty = () => {
    this.setState({
      product: {
        sno: "AABC12",
        name: "Arsenal Kit",
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExAVFRUXFRUVFRUSFRUVFRUXFRUXFhcVFRUYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGxAQGi0lICUtLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIFBgQHCAP/xABLEAACAgEBBAcDBgYQBwEAAAABAgADEQQFEiExBgcTQVFhcSKBkRQyUpKToSNUcpSxwRUlMzViY2RzorKzwtHS4fAWJEJEU4LDRf/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBgX/xAA1EQACAgECBAMGBQMFAQAAAAAAAQIRAyExBBJBUWFxkQUiobHR8DJCgcHxExRSM2JyguEj/9oADAMBAAIRAxEAPwDvGIiAIiIAiIgCIiAImv8ASLpdpNED296h8ZFS+1afD2ByB8Tgec6m6Vdaup1ANemU0VngXzm1h+UOFf8A68f4UrKaRsYOFy5n7q079DupNoIxda2DFG3HwchXwG3SfpYI4d2RPpVc2Bnj906m6kNqD8PpSeJIvTz5JZ7/ANy++dpO5Hp3SYu1ZXiMLw5HB9DljUeUntx4H7pg9vbZ+Taey8174rAO6Du5yyrzwcc5pg626O/SWj0dT/hIcktycXDZcq5oRtHZ/bjwMg6jymgbI6yqNRdXStFqmxt0FimBwJ44PlNz7bykpp7FMuGeJ1NUzkNqDn9InG2RtqnUB+zb2q3au1DjfrdGKlWHqDg8j3Sms1K11va5wqK1jeSqMn7hPNdO3NRXqG1FTslhd3LKe923mBB4MM9xyJWU+VmfheFedSrp8/4s9VxOpOinW8rYr11e6eXbVAlPV6+a+q558hO0dDra7kFlVi2I3JkIZT7xLKSexhy4cmJ1NUcqIiSYhERAEREAREQBERAEREAREQBET4aluGPH9EA0rpB1paGjK1E6hx3VcK8+dp4Y81DTrXb/AFm6/U5VHGnrPDdp9liPO0+1n8nd9Jbrd2D8n1faoMV6gGzHcHBAtA9cq3q5mi5MwSlK6Pf4PhsHJGfLd99S7MSSScknJz3k8yfExIEmYj1VVHO2Fta3S6ivUV/ORs47mB4Mh8iCR756L6P7co11Itqbhw3lON+tvouP18jzE8yiZPY22b9LYLaLCjDgccVYfRdeTDyPrzl4z5TR4zgFnXMnUl8fA7s6zX7PZt+ebGpB4HNqE/cG+E6M7MnkCeBJx4DmZ2zsPrW09i7mspNZIwzKpsqbxzXxZfTDesyqNsCwbwbRrnHAMtH9HK4+EyOpPRmnwvET4KLhkxve7+9PidQ9Hbuz1NL8t26sknwFi5+7M9G1195+E0s7a2FojvJ2BcfNNCds/us4hfewmn9K+tK68GvSqaEPAuTm5h5MOFfuyfMSFJQ6leJWTjpxlCDSSq39/KzKdb3TFd06Kht4k/8AMMp4KFORUD9Ini3hjHecdS5lmafPExuXM7Z6eDh1w8eWOvfz+/QsJzdl7b1GmbeovsqPfuMQD+UvJveDODGZBnnFSVM7Q2D1x3LhdVUto73r/B2epX5rH03Z2j0Z6U6bXIzUOSU3d9HUq6b2cZ7jyPEEjhPLu4J3j1NbO7PQm3PG212B/gpisD6yv8ZlhJt0eJx/CY8cOdKndaPT0dnZ0T4aa7eHmOc+8zHkCIiAIiIAiIgCIiAIiIAnDsbLH4fCcl2wCZwwIBpnW1s3tdAzge1U6WDHPBO4w9MPn/1nQxnp7bWl7bT3U/8AkqsT0LIQD7iQZ5jfmfWa+Va2dB7IneKUOz+f8FZUyxlSZjSPUk6JBlp932datYtatxW7FVYqQrFeYB7/APQ+BnHgRdkxveZlA4kRRPOlsXLyMwFkySqvqQZGPKbH0V06Nvsy1kgrg2BSo9mx2zvAhcivGe7My1mx7mJ3LtHeuTjhSCRnCkqV9kkEHAbh3mRUt0jWnxUVOUXSqt20tVfZ/GjR5Wbbtbo6yUl7KBS/tkANlGCBW+aS3Ne0PAgDdHDjw1ICTVbl8eeOW+Xp97ll5z0v0Z0HYaSinvSpA35W7l/6RM8+dF9D2+r09WMh7EDD+CGBf+iGnpbMy4luzyva89YQ83+31J0zYfHjw9/OZGYhzj2s4xxyeAGOOSfCZOpwwDA5BAIPiDxEzHjn0iIgCIiAIiIAiIgCIiAfDVHhjxM+Al9UeIH+/wDfCfIQCHOOM829J9F2OrvqxjcssC/klyU/okT0k06a64dkmvUpqAOFybrYH/XXgcT5oU+oZiyLQ9T2Tk5czj/kvitfqdckTYOiexFvYvYd2pCOa2btjcD2RtXhWCMZYnI3hgEmYJpy6Nq3ooRLXRQSQEdl4kYPL9HmfGYfM9vNCbjWN0+/0O39rHTvp7dKaLBp2yagQFGnesZL1ld7FecMMgAFmBOGCjp/amz3otatypZcZKElTlQ3AkA8iO6cVyW5kk+J4n4yoTEmT5jX4bhpcNfvWn4de+7JIkRmSJU3k09iogmWUSSIDT6Ga6K6hQ7VnGHAxnBBPEbhz9JXdfUibrpxpGBSyug2D54RFQDOCCu/hsYI4jOO/Hf1Yy4mdTatVqgagMGUcLEALMBxwwPf4HxPdxzL9TzuIwc0+bVXvXhs+n669E/AzmsbTiu/sqyETtMN2jlGY02VeyGJyM3IM8M74I+bx0czLbW2sLFWupdyschnLMRnBc+8nHiTxJ4zDkQvv7/UzcPjlBOT3eu9vTTV93uze+p/R7+u3yP3Kux892WxWPusb4TvBePpOr+pXR4quu72dah6Iu+SPtB9Wdnjw7pnxqkeH7Qyc+d10pff62cfX6qutC1jqqcsuQAc93n38JPRS9DpwiWFxUzVbzDB9nkDx5gFR7pxdu7O7dUTe3QtqWEY3gwXPsEZHPPPu590+/RXZKaatqkZmyVZmc5LMEWssfMhFz55PfL9TU93k31sz0REkoIiIAiIgCIiAIiIBwtQfaPu/RKS159s+79EjEgEKfjNS6yNl/KNFaMZav8ADL4/gwd4e9C49cTbHWYnaF2Pncvuhqy+OTjJSXTX0POen0r2MErRmY/NVVLMeGeCjieAmfHQLaG5vnTFR3B3qR28lRm3s+WJjjqDpNVv1HjRed3iePZueBPeCBg+Rm29Z+h0o1L2dtZ21m5YtfZjcClAMGzezkkE8ARk4x3zWrS2dNlzTWSMIbSV3TfwTVKndmgtSQSDwI5g8CPUd0kJ3cc55d+TyGJ2hsXX7mwzqNxHs094FRsQP2ZZ0XeAPeBa2M8Bw8Jz+k3SC1Nn6PXotY1L7tZtNasQrI7MF3s4yax6AnGMyeXS76WU/vJKfIoX7zhfN19NFX3odUbM0QtvSt37NWcK77pbcXOCxA8J9ttbMSu+xNO5vqrPC1FO6RjJJIyOByM5wd0kTtfpQR+yWyb1AV7SA7LwLDNfAnvGLGHoZfYK46Q64DgradSQORO7pjkjvOWb6x8ZPJ08TA+Pk1/US05Lr/tXa/vqdMJpLPZPZsQ5wp3ThjnGFOPaOfCffWbLtqIFtL1kjIDqyEjxG8Bmblo9pbR1l5oocIlDO1ZASqvS1qjVDDquVAR8DmeAPcTM7tsqdiB11Fl5S8FdRZvB94WFS1e8SyrxIGTn05CtXqZv7mUZxjJRdtKrbrmutapeXXVrQ0TVdD9XXplvOncKxdt0VMSqooY2Pgfg1OTjex80nljOFOht3O07Nuzzje3W3c8sb2MZzO2eldjPTsejtLFGoWuq0q7AstiadHDEH2siw8/GcrpXqk0tt5tdVp+RfJtNpA3Cxm4huyHBUU5XeI9OXGzgjBH2hkqNxTbtqr2Tql3fbw36nSRML6TsDp+gGm0xprqOletDQVRQ9bojC1GYDey+QTvE8az3gk6CoyeAz4Ad8q9GbvD5Xljz7a7b/wAeX7Ud79WGlNegpB5vvOfR2JU/V3ZuXlMH0aCrRWoI9lFX6owMD3TNLNhbHMZZc02+7fzIHOfTRnD+uf8AH9UpGnOHX4fH/YkmMykREkCIiAIiIAiIgCIiAYjT66q1m7O2tyGKkI6sQVOCCAeBGOU5Qms7Q6FM5LdvVac5HyzSU2svfhbaeycepJPCcP8AYDW1fMV8fyTX2591GrR6x9eVt9i9R6M3BzNR6VAsUQEjfdK+HP22C/rnFfaeuq+f8pXy1WgGoH2mz3OB5lZwKdpX6nVaZd2tlF1bsa69YpARg5LLbUoQezzLRZeMeV3f3+p1304QDaGqAGAL7OA82mzdJKNDrHrufaaVf8vSrJ2VtjKyrxB3fMzWenh/bHV/zz/15gZrvRs6THi/qQxyUqaj0rql3TXTsb7Rt7Qps7V6FXtO9bv0s1Y9sKKiCwHzAXpbuyAw5kGcPaXSei3ZdGjKWrbS4be3UNTY7Rcb2/vD2bM/N5jHLjJ2LSibMtv+SLfYdT2G86M/ZL2G+1gxywSvE8MsJlNNs2hdo7NrNFRVtHSbUKKRZbZXaS1gI9pslOJ8BLb6Go+SE26b5ZOV2t4xt/o9F4vY+G1em9FjbOsFdos0jJvqdzccYr39xt7OfwfDIHPjPtR0606bUs1y1WlLaBWyHsw6sOzGVwxBGKl5kczNa6bKiakaepVC6equjKBQbLEUdo74HFy5YE/wZv8A0z2RWqV0HT0oW1unpoZK0Sx6uwTtHJXiw7Rivw9ZPvMpKOCMYJxdSTW+ybUu3ja7UzUOj3SivTXan8C1mn1IZGUkJaqktjiCRnDsDx8DkYxPtrOl2mbZ76FNNZWu9vVMbFc8HDZs4DiW3s7vIEc8cdkvsv8A2bqoaiquvesFa9lX7VDE5YgDjnsTgniOPLM4Gxuk1hr2jqB2eE7I14qrwGss7Ksj2eICry9TIXbz6FpNSamoa1B/j63yx/LV9/1RgNv9LV1FGjVa3S3SBVVwykNhaxvAcwc1IRz75ydvdJNDrAt2o0941CpuHsXQUWMAdwuT7ajJ5Du4ZOJlNp6O4aTZunWtfk9/ycOxVCz23XGwLvfP5cSeRzOH1sVKGo/AJU5fVjCIqFqkuVKWYDmCFZgfBod6vyIxTxSlDHFNfipqWqWtra6b6bpddTB7f2tp/ktem0xsKdrZe3agA1l1VFqQgneAAYlu/ezzzMX0YqD6vTIRkNfSpHiGtUEffMdM71e0b209Iv8AHK31Mv8A3ZVam5OCw4pVez87O4uiKFBYh5rY6nzKsV/VNrE6/wBXtS6jV6mtNwDtmYE6fW3EhwHzilMH53c05de1tdZ8ztT5V7Lvrz6Pq7kWbNnNyjbuzdZidpbd0tLbr3oH7q1O/afSpMseXhMENh66/wDdUtIPMazVrUv5toV3XHk1kyez+hbKN19Ua176tn1Jo6z+U671xPn2g5SNStRXW/v1+BtOj1IsrSwBlDKrYdSrDeGcMp4qR3gzkzibP0SU1rXWCEXON5mc8SSSXclmJJJySZy5YoIiIAiIgCIiAIiIAiIgCRJiAeZunn746r+fs/rTXzNg6eH9sdV/PWf15r81Xudjg/0Yf8Y/I2u7afZ7Kppruw9mote2uuzDEBURRYgOSDjIzwOPKbBr9Xpl2vpr/lVL0KE9qss24KagoDkDmXBxjPAidagxmNvh8DG+FjK/e3570X5/poZXSatX1i22nCterWE5OFa0O5OOJwCTN82r0p0Z1OmxqO0rGss1dr9laoTiOyQKVLMQAASB/p1dEhOti2Xg4ZJJu9E0l539Td9n7T0lG0rNT8q7Vdy+xLBVYn4a5XATcIz/ANZ9o4Exeh2nUmztRTvfhbrqfZw3GuoFs72MfOPLOZrhMjMnX5/EiPDxi92/w9vyu1svHX/w7E1W09B8t0OoGr3q6VoR17G0dmKEyrZI9vL9wHCa9022pXqX09ivvP8AJqktGCCtqFgQSRx4FePGa4ZUxZXHwcccou26Va1tr2S7kETbeqire2ppuHAGxj5Yosx9+JqZm8dTTftknnXZj6pP+MR3RHGSrDPyZ6DiIm0coIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHl/pixOu1ZP4zqB8L3A/RMLmZXpUc6vUHx1Fx+NzmYsTV8TsMVvHFf7V8kFEmRJEqzYjSJPCUzJxGJYq72ICS0ZkSCUktEMSrGTKkQisr6Fe8Td+p7986fyLv7NppQm6dUH76U/k3f2TSy3RqcUqwT8meiIiJsnKiIiAIiIAiIgCIiAIiIAiIgCIiAIiUscAEnkAT8OMA8rbbs3r7W8bXPxYzhRY5Jz48fjxkGah2kNIpdgR8YRpAaXxJGu8WSZWWMgSC6k3ui0+TiXzKl5NMpJxejZUPLSrCRiKRFyWjBm6dUFn7aVDxW7H2TH9U0smbZ1VNjaukPnaPjRaJMd0a3F64ZeTPSMRE2TlRERAEREAREQBERAEREAREQBERAExPSjUdno9TYOa6e5h6itiPvmWmrdZl+5szUnxRU+0sVP70hvQvjjzTUe7XzPN78/fKZzLOJM1TsmnJ+AAxI3pBiQT4Fw0gvKESwMmyjTehOJBMiI3LJKOwkEywlMQQ7rQpjM2rq1fd2npT/ABhH1lcfrmszOdB7N3aGjP8AKKh9Zwv65Kds188UsU14P5HqCIibRyYiIgCIiAIiIAiIgCIiAIiIAiIgCaB11ajd2du/+S+pPhvWf3Jv86r699TirTVfSeyz7NVX/wCkrN+6zZ4OHNngvH5anTRkSuJYTWZ1idlWWUDT6GSRF9yrh/iRnMSu74SRGnQJvqMZkFZOZMiyzimfMNL5liJ892WtMpUolpk+inDW6Q/ynT/2yTF5mS6OtjU0nwvqPph1gx51eOXk/kz1XERNo5EREQBERAEREAREQBERAEREAREQBOkevTVZ1dNf0KN/7R2H/wAxO7p5363NVv7TuHci1Vj7NXP3uZjyfhPR9lxviE+yb/b9zTTIMmUZprpHSSdLUsJMosnMBMkyZAMEwTYiULSwHxklFK9EWkSJMgvZBn20NoV1Y8lIY+gYEz4M0qOOZPQxSabo9fxPjpbd5Fb6ShviMz7TbOOEREAREQBERAEREAREQBERAEREATy/021Paa/Vt/H2qPRHKD7lE9QTyZtG/ftsf6Ts31nJ/XMWV7HreyF/9JPw/c4haVVZcyJiPaq3bLZk4lQZYSGjJF2RnwEqRLZkyUVcb6lQstEgmCdIkiUJPhLQZBL1K7skc/fInL0WhazeYFQi43jYwVRnOB4knB4CSYuaMNWem+id3aaHSuebaakn1Na5++Zia31dWb2zdIf4lR9XK/qmyTZWxyMlUmhERJIEREAREQBERAEREAREQBERAPna2AT4An4CeRA33z16wzwnRfS3qs1NdjNpE7aonKqGAsrH0SCRvgcgRk+ImPImel7OzQxykpOrqu2l/U645yZlm6Ka8c9n6nh4aa4/AheMivoptBjw2fqffRav3somKj2nxGNbyXqjFYleImfToRtM/wDZXj1SWPQvaX4lf9mYoj+tjlrzL1X1Ne35bMzh6E7R/ELvs3lD0M2gP/z9R9k0hof3EOso+qMODJImTbortEc9Bqfdp7T+hZA6L7Q/EdT+bXf5ZNFlxON/mXqvqYkrJBmW/wCFdf8AiGq/N9R/lkf8L6/8Q1P5td/lgqsuNbTXqjF5lZlG6N60f9hqPze7/LOZszoPtG1gq6O5cnBa5GqUeZNgHD0zCQlxGNbyXqjvPqvz+xelz9BvgLHx902uY3YOzRp9NTQDnsq0TOMbxUYLY8zk++ZKbC2OWm05NruxERJKiIiAIiIAiIgCIiAIiIAiIgCQYiATIiIIIloiCCsRElhCWiIJYkCTEASoiIBaIiQSIiIAiIgCIiAIiIB//9k=",
        price: 2500,
        qty: this.state.product.qty + 1,
      },
    });
  };

  decrQty = () => {
    this.setState({
      product: {
        ...this.state.product,
        qty: (this.state.product.qty - 1 > 0) ? this.state.product.qty - 1 : 1,
      },
    });
  };

  render(): React.ReactNode {
    let { product } = this.state;
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3">Product Items</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  officia ab, dicta quisquam odio esse deleniti quas quidem
                  cumque molestiae reprehenderit expedita, aliquid nam
                  temporibus doloremque vel quia minima! Animi at, nesciunt eum
                  tempora omnis, sed a commodi officiis esse voluptates natus
                  odio soluta! Ad reiciendis voluptate optio aperiam!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="col">
              <table className="table table-hover text-center table-striped">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{product.sno}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={product.image}
                        alt=""
                        width={70}
                        height={70}
                      ></img>
                    </td>
                    <td>{product.price}</td>

                    <td>
                      <i
                        className="fa fa-minus-circle mx-1"
                        onClick={this.decrQty}
                      />
                      {product.qty}
                      <i
                        className="fa fa-plus-circle mx-1"
                        onClick={this.incrQty}
                      />
                    </td>
                    <td>{product.price * product.qty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ProductItem;
