
const AgingCrisis = () => {

  return (
    <section
      className="py-16 sm:py-24 bg-[#EFF3ED] text-[#030229]">
      <div className="container mx-auto">
        <div className="mx-auto w-fit mb-4  ">
          <p className="text-base font-normal font-headline bg-[#8B0000] bg-opacity-5 px-10 py-2 rounded-[2rem] text-[#030229] cursor-pointer ">
            AFRICAʼS AGING CRISIS
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <p className="text-xl md:text-2xl !leading-10 font-headline font-medium capitalize text-[#030229]">
              Africaʼs elderly population is projected to triple  from <span className="text-[#8b0000]">74 million in 2020 </span> to <span className="text-[#8b0000]">235 million by 2050</span>.
              Despite this growth, home care services remain underdeveloped, leaving millions of elderly
              individuals without access to professional care.
            </p>
          </div>
          <div className="flex justify-center">
            <div style={{ background: "linear-gradient(to left, #EFF3ED, #ffffff30)", padding: "20px", borderRadius: "12px", fontFamily: "Poppins", color: "#030229", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "30px", justifyContent: "center" }}>
                {/* Left side: Bar Chart */}
                <div style={{ flex: 1, minWidth: "300px" }}>
                  <h3 style={{ textAlign: "center" }}>Projected Growth of Africa's Elderly Population (Millions)</h3>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "40px", height: "200px", marginTop: "90px" }}>
                    {/* 2020 Bar */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ backgroundColor: "#3498db", width: "60px", borderRadius: "6px 6px 0 0", position: "relative" }}
                        title="74 million">
                        <div style={{ height: "100px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                          <span style={{ color: "white", fontWeight: "bold", paddingBottom: "5px" }}>74M</span>
                        </div>
                      </div>
                      <strong style={{ marginTop: "10px" }}>2020</strong>
                    </div>
                    {/* Growth Arrow */}
                    <div style={{ display: "flex", alignItems: "center", color: "#8b0000", fontSize: "1.5rem" }}>
                      <span style={{ fontWeight: "bold" }}>3X</span>
                      <span style={{ fontSize: "2rem", margin: "0 10px" }}>➔</span>
                    </div>
                    {/* 2050 Bar */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ backgroundColor: "#2E8B57", width: "60px", borderRadius: "6px 6px 0 0", position: "relative" }}
                        title="235 million">
                        <div style={{ height: "220px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                          <span style={{ color: "white", fontWeight: "bold", paddingBottom: "5px" }}>235M</span>
                        </div>
                      </div>
                      <strong style={{ marginTop: "10px" }}>2050</strong>
                    </div>
                  </div>
                </div>
                <p >Tripling in just three decades</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xl text-[#030229] opacity-90">
          What this means for health systems: ageing increases exposure to chronic disease, disability,
          frailty, dementia, falls, and caregiver burden—and these drive higher costs if care is only
          facility-based.
        </p>
      </div>
    </section>
  );
};
export default AgingCrisis;
