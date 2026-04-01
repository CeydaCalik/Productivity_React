import data from "./faq.json"

export const FAQ = () => {

    return (
        <>
            <section className="py-12 px-44 flex flex-col gap-4 items-start">
                <h1 className="text-5xl text-main-500 underline">FAQ</h1>
{/* 
                <p className="text-lg text-main-900 bg-main-100 py-5 px-5 rounded w-3xl ">Doctor Who est une série culte de science-fiction britannique qui suit les aventures d’un mystérieux voyageur temporel appelé le Docteur.
                    À bord du TARDIS, un vaisseau capable de voyager dans le temps et l’espace, il explore l’univers et affronte de nombreux ennemis.
                    Chaque régénération du Docteur apporte un nouveau visage et une nouvelle personnalité, renouvelant sans cesse la série.
                </p>

            </section>
            <section className="py-8 px-44 flex flex-col gap-4 items-start">
                <h2 className="text-4xl text-main-500 underline">F.A.Q</h2> */}

                <div className="bg-main-100 px-5 py-5 rounded">
                    {data.faq.map((item) => (
                        <div key={item.id} className="gap-3 px-5 py-3 my-3  rounded ">
                            <h3 className="text-2xl text-main-50 bg-main-800 px-2 rounded">{item.question}</h3>
                            <p className="text-lg text-main-900 bg-main-300 rounded px-1">{item.réponse}</p>
                        </div>
                    ))}
                </div>


            </section>

        </>
    )
}