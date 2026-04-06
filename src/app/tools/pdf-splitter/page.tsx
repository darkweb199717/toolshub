"use client";

import type { Metadata } from "next";
import PDFSplitterClient from "./PDFSplitterClient";

export const metadata: Metadata = {
	title: "PDF Splitter Online Free - Split PDF Pages Easily | NWSTime",
	description:
		"Split PDF files online for free. Extract pages, split by page ranges, or divide PDF into multiple files quickly and securely with NWSTime PDF Splitter.",
	keywords: [
		"pdf splitter",
		"split pdf online",
		"split pdf pages",
		"extract pdf pages",
		"free pdf splitter",
		"pdf page splitter",
		"online pdf tools",
		"split large pdf",
		"separate pdf pages",
		"pdf file splitter",
	],
	alternates: {
		canonical: "https://www.nwstime.com/tools/pdf-splitter",
	},
	openGraph: {
		title: "PDF Splitter Online Free - Split PDF Pages Easily",
		description:
			"Split PDF files online for free. Extract pages, split by ranges, or create one PDF per page easily.",
		url: "https://www.nwstime.com/tools/pdf-splitter",
		siteName: "NWSTime",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "PDF Splitter Online Free - NWSTime",
		description:
			"Split PDF files online for free with page ranges, custom page count, or one page per file.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function PDFSplitterPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='max-w-5xl mx-auto'>
				{/* Hero Section */}
				<section className='mb-10 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						PDF Splitter Online Free
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'>
						Split PDF files into smaller documents online for free.
						Extract specific pages, divide by page ranges, or create
						one PDF per page quickly and securely.
					</p>
				</section>

				{/* Tool */}
				<section className='mb-12'>
					<PDFSplitterClient />
				</section>

				{/* SEO Content */}
				<section className='space-y-10'>
					<div>
						<h2 className='text-2xl font-bold mb-4'>
							What Is a PDF Splitter?
						</h2>
						<p className='text-muted-foreground leading-7 mb-4'>
							A PDF splitter is an online tool that allows you to
							break a large PDF file into smaller PDF documents.
							Instead of keeping all pages in one file, you can
							separate selected pages, split a document by page
							ranges, or save each page as an individual PDF.
						</p>
						<p className='text-muted-foreground leading-7'>
							This is useful for students, office workers,
							business owners, teachers, and anyone who needs to
							organize, share, or extract parts of a PDF document
							without editing the original file manually.
						</p>
					</div>

					<div>
						<h2 className='text-2xl font-bold mb-4'>
							How to Split a PDF Online
						</h2>
						<div className='grid md:grid-cols-3 gap-6'>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold text-lg mb-2'>
									1. Upload Your PDF
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Choose your PDF file from your device or drag
									and drop it into the upload area.
								</p>
							</div>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold text-lg mb-2'>
									2. Choose Split Mode
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Split by page count, custom page ranges, or
									extract every page into a separate file.
								</p>
							</div>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold text-lg mb-2'>
									3. Download Results
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Download each split PDF file instantly after
									processing is complete.
								</p>
							</div>
						</div>
					</div>

					<div>
						<h2 className='text-2xl font-bold mb-4'>
							Why Use This PDF Splitter?
						</h2>
						<div className='grid md:grid-cols-2 gap-6'>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold mb-2'>
									Fast and Easy
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Split PDF files in just a few clicks without
									complicated software or technical skills.
								</p>
							</div>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold mb-2'>
									Useful for Work and Study
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Separate reports, assignments, contracts,
									invoices, notes, and presentations into
									smaller files.
								</p>
							</div>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold mb-2'>
									No Complex Software Needed
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Use the tool directly in your browser
									without installing desktop applications.
								</p>
							</div>
							<div className='border rounded-xl p-5'>
								<h3 className='font-semibold mb-2'>
									Better File Organization
								</h3>
								<p className='text-sm text-muted-foreground leading-6'>
									Break long PDFs into smaller files so they
									are easier to share, store, and manage.
								</p>
							</div>
						</div>
					</div>

					<div>
						<h2 className='text-2xl font-bold mb-4'>
							Common Uses of a PDF Splitter
						</h2>
						<ul className='list-disc pl-6 space-y-3 text-muted-foreground leading-7'>
							<li>Split a large PDF book into chapters</li>
							<li>Extract invoice pages from a report</li>
							<li>Separate student assignments by page range</li>
							<li>Save each scanned page as a separate PDF</li>
							<li>Divide contracts into smaller sections</li>
							<li>Prepare files for email sharing</li>
						</ul>
					</div>

					<div>
						<h2 className='text-2xl font-bold mb-4'>
							PDF Splitter FAQ
						</h2>
						<div className='space-y-6'>
							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Is this PDF Splitter free to use?
								</h3>
								<p className='text-muted-foreground leading-7'>
									Yes, you can split PDF files online for free
									using this tool.
								</p>
							</div>

							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Can I split PDF by page ranges?
								</h3>
								<p className='text-muted-foreground leading-7'>
									Yes. You can enter custom page ranges such
									as 1-5, 8-10, or single pages like 12.
								</p>
							</div>

							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Can I extract each page separately?
								</h3>
								<p className='text-muted-foreground leading-7'>
									Yes. The tool includes a mode that creates
									one PDF file for each page in your
									document.
								</p>
							</div>

							<div>
								<h3 className='font-semibold text-lg mb-2'>
									Why should I split a PDF?
								</h3>
								<p className='text-muted-foreground leading-7'>
									Splitting a PDF helps reduce file size,
									extract important pages, improve sharing, and
									make large documents easier to organize.
								</p>
							</div>
						</div>
					</div>

					<div className='border rounded-xl p-6 bg-muted/30'>
						<h2 className='text-2xl font-bold mb-4'>
							Final Note
						</h2>
						<p className='text-muted-foreground leading-7'>
							If your PDF is too large or contains many sections,
							this PDF Splitter tool makes it easier to separate
							only the pages you need. It is designed for
							everyday use, whether you are handling office
							documents, school files, business reports, or
							personal paperwork.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
