import { FC, useRef, useEffect, useState } from 'react';
import { Container } from '../../ui/Container';
import './Blogs.css';
import { useInView } from 'framer-motion';
import React from 'react';
import { fetchRSSFeed } from '../../../utils/rssFetcher';
import { BlogPost, FeedData } from '../../../types/blog';

export const Blogs: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [feedInfo, setFeedInfo] = useState<FeedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetchRSSFeed('https://davekav.substack.com/feed');
        if (response.status === 'ok') {
          setBlogs(response.items);
          setFeedInfo(response.feed);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section 
      ref={sectionRef}
      className={`blogs ${isInView ? 'is-in-view' : 'is-blurred'}`}
      id="blogs"
    >
      <Container>
        <div className="blogs__header">
          <div className="blogs__branding">
            <h1 className="blogs__title">
              <span className="blogs__title-text">dave-kav</span>
              <span className="blogs__title-domain">.dev</span>
            </h1>
          </div>
          <div className="blogs__intro">
            <div className="blogs__intro-content">
              <p className="blogs__description">
                A developer-focused publication exploring programming techniques, 
                software development practices, and thoughtful insights into 
                real-world engineering challenges.
              </p>
              <a 
                href="https://davekav.substack.com/subscribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="blogs__subscribe-qr"
                aria-label="Subscribe to the blog"
              >
                <img 
                  src="/qr-code.svg" 
                  alt="Scan or click to subscribe" 
                  className="blogs__qr-code"
                />
                <span className="blogs__qr-label">Scan or click to subscribe</span>
              </a>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="blogs__loading">Loading posts...</div>
        ) : (
          <div className="blogs__list">
            {blogs.map((blog, index) => (
              <article key={index} className="blog-item">
                <div className="blog-item__content">
                  <header className="blog-item__header">
                    <h2 className="blog-item__title">
                      <a 
                        href={blog.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {blog.title}
                      </a>
                    </h2>
                    <div className="blog-item__meta">
                      <time className="blog-item__date">
                        {formatDate(blog.pubDate)}
                      </time>
                    </div>
                  </header>
                  <div className="blog-item__body">
                    <div 
                      className="blog-item__description"
                      dangerouslySetInnerHTML={{ 
                        __html: blog.description
                      }}
                    />
                    {blog.enclosure?.link && (
                      <div className="blog-item__thumbnail">
                        <img 
                          src={blog.enclosure.link} 
                          alt="Post thumbnail" 
                          className="blog-item__thumbnail-image" 
                        />
                      </div>
                    )}
                  </div>
                  <footer className="blog-item__footer">
                    <a 
                      href={blog.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="blog-item__link"
                    >
                      Read post →
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}; 