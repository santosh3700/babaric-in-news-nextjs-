import { Box, Center, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ClassesPostBody from '../../styles/post-body.module.css'

function PostData({ data }) {
    const author = data.author.node
    const date = new Date(data.date)
    const imagePath = data.featuredImage.node.sourceUrl
    const tags = data.tags.edges

    return (
        <>

            <Box overflow="hidden" >

                {/* Post title */}
                <Text fontSize="lg" as="h1" fontWeight="semibold" align="center">
                    <div dangerouslySetInnerHTML={{ __html: data.title }} />
                </Text>

                {/* Author detail */}

                <Text fontSize="md" as="p" align="center">
                    By <b>{`${author.firstName} ${author.lastName} `}</b>
                    on <b>{date.toDateString()}</b>
                </Text>

                {/* Featured Media */}
                <Image priority src={imagePath} width={320} height={180} layout="responsive" alt={data.title} />

                <br />
                {/* Advertisment */}
                {/* <Link href="https://betway.com/?s=bw201071&a=AFF2691637807824315&mid=86309&utm_source=201071&utm_medium=Affiliate&utm_campaign=AFF2691637807824315" target="_blank" title="Betway IN ICCI Women's banners">
                    <Image
                        priority
                        src='https://babacricnews.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/03/11102256/dde12ec96adf82d.gif'
                        width={323}
                        height={83}
                        layout="responsive"
                        alt="Betway IN ICCI Women's banners"
                    />
                </Link> */}



                {/* Post Content */}
                <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}

                />

                <div className="tagContainer">
                    {
                        tags ? (
                            tags.map((tag) => {
                                //console.log(tag.node)
                                return (
                                    <Tag key={tag.node.name} className="tagBox">
                                        <Link href={tag.node.uri}>
                                            {`#${tag.node.name}`}
                                        </Link>
                                    </Tag>
                                )
                            })
                        ) : null
                    }
                </div>

                <br />
                {/* Telegram Join ad */}
                <Link href="https://bit.ly/3HMsPd8" target="_blank">
                    <Image
                        src='https://babacricnews.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/11104953/telegram-footer.png'
                        width={360}
                        height={45}
                        layout="responsive"
                        alt="Telegram ad"
                    />
                </Link>
            </Box>
        </>
    );
}

export default PostData;