import PlanItem from "./PlanItem";
const Plan = () => {
    return (
        <section className="col-12 d-flex flex-column flex-lg-row plan-container  ">
            <PlanItem iconclass="gold " price="299$" month="12" contacts="unlimited" />
            <PlanItem iconclass="silver " price="199$" month="6" contacts="300" />
            <PlanItem iconclass="bronze " price="Free" month="3" contacts="100" />
        </section>
    )
}

export default Plan