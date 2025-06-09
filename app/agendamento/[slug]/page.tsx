export default async function pageDinamyc({searchParams,params}:{searchParams:Promise<{i:string}>,params:Promise<{slug:string}>}){

    const {slug} = await params
    const {i}= await searchParams

    return(
        <h1>{slug}e{i}</h1>
    )
}