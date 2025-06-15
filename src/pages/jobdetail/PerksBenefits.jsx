import "../../pages/styles/perks-benefits.css"
import { CalendarHeart, Briefcase,Heart, Sprout, Smile } from "lucide-react"

const PerksBenefits = () => {
  return (
    <div className="perks-container">
      <h1 className="perks-title">Perks & benefits</h1>
      <div className="perks-content">
      <div className="perks-grid">
        <div className="perks-note">
          <p>
            OUR PERKS PRIORITIZE GROWTH,
            <br />
            WELL-BEING, COMMUNITY, AND
            <br />
            WORK-LIFE BALANCE FOR
            <br />
            EMPLOYEES
          </p>
        </div>
        <div className="perks-category">
                        <div className="category-header">
                        <CalendarHeart className="category-icon" />
                          <h2 className="category-title">Holidays and Leaves</h2>
                        </div>
                        <ul className="category-list">
                          <li>Paid leaves</li>
                          <li>Maternity leave</li>
                        </ul>
                      </div>
      
  <div className="perks-category">
    <div className="category-header">
      <Briefcase className="category-icon" />
      <h2 className="category-title">Work environment</h2>
    </div>
    <ul className="category-list">
      <li>Collaborative Culture</li>
      <li>Continuous Learning and Growth</li>
    </ul>
  </div>


  {/* <div className="perks-category">
    <div className="category-header">
      <Watch className="category-icon" />
      <h2 className="category-title">Time</h2>
    </div>
    <ul className="category-list">
      <li>Paid vacations</li>
      <li>Maternity and paternity leave</li>
      <li>Paid bereavement leave</li>
    </ul>
  </div> */}

  <div className="perks-category happiness-category">
    <div className="category-header">
      <Smile className="category-icon" />
      <h2 className="category-title">Happiness</h2>
    </div>
    <ul className="category-list">
      <li>Rewards and Recognitions</li>
      <li>Get-togethers & Dinners</li>
    </ul>
  </div>

  <div className="perks-category">
    <div className="category-header">
      <Heart className="category-icon" />
      <h2 className="category-title">Health and well-being</h2>
    </div>
    <ul className="category-list">
     <li>Health Insurance</li>
     <li>Friendly Workstations</li>
    </ul>
  </div>

  <div className="perks-category">
    <div className="category-header">
      <Sprout className="category-icon" />
      <h2 className="category-title">Growth</h2>
    </div>
    <ul className="category-list">
      <li>Professional Development Programs</li>
      <li>Educational Reimbursements</li>
    </ul>
  </div>
</div>
</div>
</div>
  )
}

export default PerksBenefits
