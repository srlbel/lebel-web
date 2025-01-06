export const load = async ({ params }) => {
    const post = await import(`../${params.slug}.md`)
    const { title, date, description } = post.metadata
    const content = post.default

    return {
        content,
        title,
        date,
        description
    }
}