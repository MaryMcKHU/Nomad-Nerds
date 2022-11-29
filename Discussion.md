High-level overview:
Back-end:
 - Django:
    -- user model
    -- favorites model - has a foreign key to user model so each user has favorites associated with it
    -- DJWTO tokens - an alternative library for JWT authentication on top of the Django framework
Database:
 - PostgreSQL database
API endpoints:
 - FastAPI - 