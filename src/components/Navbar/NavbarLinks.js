import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const links = [
    { name: "Men", submenu:true, sublinks:[
      {
        Head:"Topwear",
        sublink:[
          {name:"T-shirt", link:"/"},
          {name:"Casual shirt", link:"/"},
          {name:"Formal shirt", link:"/"},
          {name:"Traditional wear", link:"/"},
          {name:"Igbo wear", link:"/"}
        ]
      },

      {
        Head:"Bottomwear",
        sublink:[
          {name:"Trouser", link:"/"},
          {name:"Jeans", link:"/"},
          {name:"Cago pants", link:"/"},
          {name:"Breeches", link:"/"},
          {name:"Tracksuit bottom", link:"/"}
        ]
      },

      {
        Head:"Innerwear",
        sublink:[
          {name:"Boxers", link:"/"},
          {name:"Boxer Briefs", link:"/"},
          {name:"Trunks", link:"/"},
          {name:"Tanga", link:"/"},
          {name:"Jockstrap", link:"/"}
        ]
      },

      {
        Head:"sleep wear",
        sublink:[
          {name:"Linen pajamas", link:"/"},
          {name:"Cotton pajamas", link:"/"},
          {name:"Silk pajamas", link:"/"},
          {name:"Fleece pajams", link:"/"},
          {name:"Satin pajams", link:"/"}
        ]
      },

      {
        Head:"foot wear",
        sublink:[
          {name:"Oxford", link:"/"},
          {name:"sneakers", link:"/"},
          {name:"Loafer", link:"/"},
          {name:"Brogues", link:"/"},
          {name:"Mule", link:"/"}
        ]
      }

    ] }, 
    { name: "Women",submenu:true, sublinks:[
      {
        Head:"Topwear",
        sublink:[
          {name:"T-shirt", link:"/"},
          {name:"Casual shirt", link:"/"},
          {name:"Formal shirt", link:"/"},
          {name:"Traditional wear", link:"/"},
          {name:"Igbo wear", link:"/"}
        ]
      },

      {
        Head:"Bottomwear",
        sublink:[
          {name:"Bell bottoms", link:"/"},
          {name:"culottes", link:"/"},
          {name:"Harem pants", link:"/"},
          {name:"palazzo pants", link:"/"}
        ]
      },

      {
        Head:"Innerwear",
        sublink:[
          {name:"Thong", link:"/"},
          {name:"Bra", link:"/"},
          {name:"Undies", link:"/"},
          {name:"Bralette", link:"/"},
          {name:"Chemise", link:"/"}
        ]
      },

      {
        Head:"sleep wear",
        sublink:[
          {name:"T-shirt", link:"/"},
          {name:"Casual shirt", link:"/"},
          {name:"Formal shirt", link:"/"},
          {name:"Traditional wear", link:"/"},
          {name:"Igbo wear", link:"/"}
        ]
      },

      {
        Head:"foot wear",
        sublink:[
          {name:"T-shirt", link:"/"},
          {name:"Casual shirt", link:"/"},
          {name:"Formal shirt", link:"/"},
          {name:"Traditional wear", link:"/"},
          {name:"Igbo wear", link:"/"}
        ]
      }

    ] }, 
    { name: " Kid's" }
  ];

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer  group">
            <h1 className="py-7 ">{link.name}</h1>

            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:blo">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {
                      link.sublinks.map((mysublinks)=>(
                        <div>
                          <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                          {mysublinks.sublink.map(slink =>(
                            <li classname="text-sm text-gray-600 my-2.5">
                              <Link to={slink.name} className="hover:text-blue-600">{slink.name}</Link>
                            </li>
                          ))}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavbarLinks;
