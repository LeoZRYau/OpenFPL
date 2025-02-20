

#Simulate SNS Sale

SNS_TESTING_INSTANCE=$(
   docker run -p 8000:8000 -p 8080:8080 -v "`pwd`":/dapp -d ghcr.io/dfinity/sns-testing:main dfx start --clean
)
while ! docker logs $SNS_TESTING_INSTANCE 2>&1 | grep -m 1 'Dashboard:'
do
   echo "Awaiting local replica ..."
   sleep 3
done

docker exec -it $SNS_TESTING_INSTANCE bash setup_locally.sh

docker exec -it $SNS_TESTING_INSTANCE bash



