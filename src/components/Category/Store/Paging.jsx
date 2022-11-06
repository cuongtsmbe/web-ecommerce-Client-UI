import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class ComponentCategoryStorePaging extends PureComponent {
  render() {
    return (      
        <div
          className="store-filter clearfix"
          style={{
            position: "absolute",
            right: 0,
            bottom: "-50px",
            left: 0
          }}>
          <ul class="store-pagination">
            <li class="phan_trang_lk"><Link> &lt;</Link></li>
            <li class="phan_trang_lk"><Link> 1</Link></li>
            <li class="phan_trang_lk"><Link> 2</Link></li>
            <li class="phan_trang_lk"><Link> 3</Link></li>
          </ul>
        </div>      
    )
  }
}

export default ComponentCategoryStorePaging